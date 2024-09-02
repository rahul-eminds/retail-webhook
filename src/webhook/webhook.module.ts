import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AxiosHttpService } from 'src/http/axios-http.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';

@Module({
    imports: [HttpModule],
    providers: [AxiosHttpService, WebhookService],
    controllers: [WebhookController],
    exports: [WebhookService],
})
export class WebhookModule {}
