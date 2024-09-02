import { Injectable } from "@nestjs/common";
import { RetailENUM, VersionENUM } from "./retail-modules.enum";
import { RetailService094 } from "./retail-0.9.4/retail.service-0-9-4";
import { RetailService110 } from "./retail-1.1.0/retail.service-1-1-0";
import { Retail094ApiInterface } from "./retail-api.interface";
import { Retail110ApiInterface } from "./retail-api.interface";
import { DomainNotFoundException } from "src/common/exception/domain-notfound.exception";

@Injectable()
export class RetailService {
    get094(domain: RetailENUM): Retail094ApiInterface {
        switch (domain) {
            case RetailENUM.RETAIL094:
                return new RetailService094();
            default:
                throw new DomainNotFoundException();
        }
    }

    get110(domain: RetailENUM): Retail110ApiInterface {
        switch (domain) {
            case RetailENUM.RETAIL110:
                return new RetailService110();
            default:
                throw new DomainNotFoundException();
        }
    }
}
