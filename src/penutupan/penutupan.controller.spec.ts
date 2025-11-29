import { Test, TestingModule } from '@nestjs/testing';
import { PenutupanController } from './penutupan.controller';
import { PenutupanService } from './penutupan.service';

describe('PenutupanController', () => {
  let controller: PenutupanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenutupanController],
      providers: [PenutupanService],
    }).compile();

    controller = module.get<PenutupanController>(PenutupanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
