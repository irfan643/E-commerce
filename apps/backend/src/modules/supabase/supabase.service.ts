import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SupabaseService {
  public supabase;
  constructor(private readonly ConfigService: ConfigService) {
    const supabaseUrl = this.ConfigService.get<string>('SUPABASE_URL') || '';
    const supabaseKey =
      this.ConfigService.get<string>('SUPABASE_SECRET_KEY') || '';
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }
}
