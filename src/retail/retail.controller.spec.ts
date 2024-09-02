import { Test, TestingModule } from '@nestjs/testing';
import { RetailController094 } from './retail.controller-0-9-4';

describe('LocalRetailController', () => {
  let controller: RetailController094;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RetailController094],
    }).compile();

    controller = module.get<RetailController094>(RetailController094);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
