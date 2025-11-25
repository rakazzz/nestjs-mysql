import { Test, TestingModule } from '@nestjs/testing';
import { PenguburanService } from './penguburan.service';

describe('PenguburanService', () => {
  let service: PenguburanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PenguburanService],
    }).compile();

    service = module.get<PenguburanService>(PenguburanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
