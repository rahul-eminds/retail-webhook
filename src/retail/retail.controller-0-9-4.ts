import { Body, Controller, Post } from "@nestjs/common";
import { RetailService } from "./retail.service";
import { Retail094_Request_DTO } from "./dto/0-9-4/retail-0-9-4-request.dto";

@Controller("retail/0.9.4")
export class RetailController094 {
    constructor(private readonly retailService: RetailService) {}

    @Post("/search")
    search(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).search(request);
    }

    @Post("/init")
    init(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).init(request);
    }

    @Post("/cancel")
    cancel(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).cancel(request);
    }

    @Post("/confirm")
    confirm(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).confirm(request);
    }

    @Post("/rating")
    rating(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).rating(request);
    }

    @Post("/select")
    select(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).select(request);
    }

    @Post("/status")
    status(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).status(request);
    }

    @Post("/support")
    support(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).support(request);
    }

    @Post("/track")
    track(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).track(request);
    }

    @Post("/update")
    update(@Body() request: Retail094_Request_DTO) {
        return this.retailService.get094(request.context.domain).update(request);
    }
}
