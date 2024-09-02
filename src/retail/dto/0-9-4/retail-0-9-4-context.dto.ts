import { RetailENUM } from "../../retail-modules.enum";
export class Retail094_CLIENT_CONTEXT_DTO {
    domain: RetailENUM;
    core_version: string;
    action: string;
    bap_id: string;
    bap_uri: string;
    city?:  string
    country?: string
    transaction_id?: string;
    message_id: string;
    ttl: string;
    timestamp: string;
    bpp_uri?: string;
    bpp_id?: string;
    key?: string;
}
