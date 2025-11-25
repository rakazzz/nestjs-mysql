import { Test, TestingModule } from '@nestjs/testing';
import { JandaFormController } from './janda-form.controller';
import { JandaFormService } from './janda-form.service';

describe('JandaFormController', () => {
  let controller: JandaFormController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JandaFormController],
      providers: [JandaFormService],
    }).compile();

    controller = module.get<JandaFormController>(JandaFormController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
