import { Test, TestingModule } from '@nestjs/testing';
import { FiloStackController } from './filo-stack.controller';
import { FiloStackService } from './filo-stack.service';

describe('FiloStackController', () => {
  let controller: FiloStackController;
  const mockFiloStackService = {
    retrieveAllElements: jest.fn(),
    addNumber: jest.fn(),
    deleteAllElements: jest.fn(),
    removeSingleElement: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FiloStackController],
      providers: [
        {
          provide: FiloStackService,
          useValue: mockFiloStackService,
        },
      ],
    }).compile();
    controller = module.get<FiloStackController>(FiloStackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
