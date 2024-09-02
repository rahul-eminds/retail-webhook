import { Retail110_Request_DTO } from "./dto/1-1-0/retail-1-1-0-request.dto";
import { Retail094_Request_DTO } from "./dto/0-9-4/retail-0-9-4-request.dto";

export interface Retail094ApiInterface {
    search: (request: Retail094_Request_DTO) => any;
    select: (request: Retail094_Request_DTO) => any;
    init: (request: Retail094_Request_DTO) => any;
    confirm: (request: Retail094_Request_DTO) => any;
    status: (request: Retail094_Request_DTO) => any;
    cancel: (request: Retail094_Request_DTO) => any;
    support: (request: Retail094_Request_DTO) => any;
    rating: (request: Retail094_Request_DTO) => any;
    update: (request: Retail094_Request_DTO) => any;
    track: (request: Retail094_Request_DTO) => any;
}

export interface Retail110ApiInterface {
    search: (request: Retail110_Request_DTO) => any;
    select: (request: Retail110_Request_DTO) => any;
    init: (request: Retail110_Request_DTO) => any;
    confirm: (request: Retail110_Request_DTO) => any;
    status: (request: Retail110_Request_DTO) => any;
    cancel: (request: Retail110_Request_DTO) => any;
    support: (request: Retail110_Request_DTO) => any;
    rating: (request: Retail110_Request_DTO) => any;
    update: (request: Retail110_Request_DTO) => any;
    track: (request: Retail110_Request_DTO) => any;
}
