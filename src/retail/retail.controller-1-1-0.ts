import { Body, Controller, Post } from "@nestjs/common";
import { RetailService } from "./retail.service";
import { Retail110_Request_DTO } from "./dto/1-1-0/retail-1-1-0-request.dto";

@Controller("retail/1.1.0")
export class RetailController110 {
    constructor(private readonly retailService: RetailService) {}

    @Post("/search")
    search(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).search(request);
    }

    @Post("/init")
    init(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).init(request);
    }

    @Post("/cancel")
    cancel(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).cancel(request);
    }

    @Post("/confirm")
    confirm(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).confirm(request);
    }

    @Post("/rating")
    rating(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).rating(request);
    }

    @Post("/select")
    select(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).select(request);
    }

    @Post("/status")
    status(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).status(request);
    }

    @Post("/support")
    support(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).support(request);
    }

    @Post("/track")
    track(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).track(request);
    }

    @Post("/update")
    update(@Body() request: Retail110_Request_DTO) {
        return this.retailService.get110(request.context.domain).update(request);
    }
}
