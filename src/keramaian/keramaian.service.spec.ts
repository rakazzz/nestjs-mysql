import { Test, TestingModule } from '@nestjs/testing';
import { KeramaianService } from './keramaian.service';

describe('KeramaianService', () => {
  let service: KeramaianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeramaianService],
    }).compile();

    service = module.get<KeramaianService>(KeramaianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
