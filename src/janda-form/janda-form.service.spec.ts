import { Test, TestingModule } from '@nestjs/testing';
import { JandaFormService } from './janda-form.service';

describe('JandaFormService', () => {
  let service: JandaFormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JandaFormService],
    }).compile();

    service = module.get<JandaFormService>(JandaFormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
