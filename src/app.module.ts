import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './webhook/webhook.controller';
import { WebhookService } from './webhook/webhook.service';
import { WebhookModule } from './webhook/webhook.module';
import { RetailModule } from './retail/retail.module';

@Module({
  imports: [
    WebhookModule,
    RetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
