import { Module } from '@nestjs/common';
import { RetailController094 } from './retail.controller-0-9-4';
import { RetailController110 } from './retail.controller-1-1-0';
import { RetailService } from './retail.service';

@Module({
  controllers: [RetailController094, RetailController110],
  providers: [RetailService],
  exports: [RetailService]
})
export class RetailModule {}
