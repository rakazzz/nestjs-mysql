import { Test, TestingModule } from '@nestjs/testing';
import { PenguburanController } from './penguburan.controller';
import { PenguburanService } from './penguburan.service';

describe('PenguburanController', () => {
  let controller: PenguburanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PenguburanController],
      providers: [PenguburanService],
    }).compile();

    controller = module.get<PenguburanController>(PenguburanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
