import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
@Controller('webhook')
export class WebhookController {
    constructor(private readonly webhookService: WebhookService) { };
    @Post()
    @HttpCode(200)
    webhookHanlder(@Body() webhookBody: any): any {
        const { context, message } = webhookBody;
        return this.webhookService.hello( context, message );
    }
}
