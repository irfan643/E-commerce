import { Test, TestingModule } from '@nestjs/testing';
import { SupabaseService } from './supabase.service';
import { ConfigService } from '@nestjs/config';

describe('SupabaseService', () => {
  let service: SupabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SupabaseService,
        {
          provide: ConfigService,
          useValue: {
            get: (key: string) => {
              if (key === 'SUPABASE_URL')
                return 'https://your-project.supabase.co';
              if (key === 'SUPABASE_SECRET') return 'your-anon-key';
              return '';
            },
          },
        },
      ],
    }).compile();

    service = module.get<SupabaseService>(SupabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create supabase client', () => {
    expect(service.supabase).toBeDefined();
  });
  it('get() should log supabase client', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    service.get();
    expect(consoleSpy).toHaveBeenCalledWith(service.supabase);
  });
});
