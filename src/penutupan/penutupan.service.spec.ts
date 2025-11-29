import { Test, TestingModule } from '@nestjs/testing';
import { PenutupanService } from './penutupan.service';

describe('PenutupanService', () => {
  let service: PenutupanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenutupanService],
    }).compile();

    service = module.get<PenutupanService>(PenutupanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
