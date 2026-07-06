import { Controller, Get, Post } from '@nestjs/common';
import { SupabaseService } from './supabase.service';

@Controller('supabase')
export class SupabaseController {
  constructor(private readonly supabaseService: SupabaseService) {}
  @Get('info')
  info() {
    return {
      hasUrl: !!this.supabaseService.supabase?.url,
      hasKey: !!this.supabaseService.supabase?.key,
    };
  }
}
