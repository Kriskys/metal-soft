import { Test, TestingModule } from '@nestjs/testing';
import { FiloStackService } from './filo-stack.service';

describe('FiloStackService', () => {
  let service: FiloStackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FiloStackService],
    }).compile();

    service = module.get<FiloStackService>(FiloStackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
