import { Test, TestingModule } from '@nestjs/testing';
import { LocalRetailService } from './retail.service';

describe('LocalRetailService', () => {
  let service: LocalRetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalRetailService],
    }).compile();

    service = module.get<LocalRetailService>(LocalRetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
