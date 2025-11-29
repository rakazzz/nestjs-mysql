import { Test, TestingModule } from '@nestjs/testing';
import { KeramaianController } from './keramaian.controller';
import { KeramaianService } from './keramaian.service';

describe('KeramaianController', () => {
  let controller: KeramaianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeramaianController],
      providers: [KeramaianService],
    }).compile();

    controller = module.get<KeramaianController>(KeramaianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
