import { Inject, Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as nodemailer from 'nodemailer';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';
import { randomUUID } from 'crypto';

@Injectable()
export class MailerServiceCustom {
  constructor(
    private readonly mailerService: MailerService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async generateOtp() {
    const otp = crypto.randomInt(100000, 999999).toString();
    const opthash = await bcrypt.hash(otp, 10);
    const verifyToken = randomUUID();

    // Store in cache with proper error handling
    try {
      await this.cacheManager.set(`otp_${verifyToken}`, opthash); // 300 seconds in ms
      const immediate = await this.cacheManager.get<string>(
        `otp_${verifyToken}`,
      );

      console.log('generateOtp: stored otp hash exists?', !!immediate);
    } catch (error) {
      // console.error('Cache set error:', error);
      throw new Error('Failed to store OTP in cache');
    }

    return { otp, verifyToken };
  }

  async sendOTP(mail: string) {
    try {
      const { otp, verifyToken } = await this.generateOtp();
      console.log(otp, verifyToken, mail);

      await this.mailerService.sendMail({
        to: mail,
        subject: ` ${otp}`,
        text: ` ${otp}`,
      });

      return { verifyToken };
    } catch (error) {
      console.error('❌ SMTP ERROR:', error);
      throw error; // 👈 don't wrap it — rethrow original error
    }
  }

  async verifyOtp(token: string, otp: string) {
    try {
      // Get the hashed OTP from cache
      const hashOpt = await this.cacheManager.get<string>(`otp_${token}`);
      // console.log('Retrieved hash from cache:', !!hashOpt);

      if (!hashOpt) {
        return { status: 'error', message: 'OTP expired or not found' };
      }

      // Compare entered OTP with stored hashed one
      const isMatch = await bcrypt.compare(otp, hashOpt);

      if (!isMatch) {
        return { status: 'error', message: 'Invalid OTP' };
      }

      // Delete OTP after successful verification
      await this.cacheManager.del(`otp_${token}`);

      return { status: 'success', message: 'OTP verified successfully' };
    } catch (error) {
      // console.error('Error verifying OTP:', error);
      return { status: 'error', message: 'Internal server error' };
    }
  }
}
