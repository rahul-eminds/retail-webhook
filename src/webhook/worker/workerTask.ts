import { NestFactory } from '@nestjs/core';
import { workerData, parentPort } from 'worker_threads';
import { RetailService } from 'src/retail/retail.service';
import { AppService } from 'src/app.service';
import { AppModule } from 'src/app.module';
import { Retail110_Request_DTO } from 'src/retail/dto/1-1-0/retail-1-1-0-request.dto';
import { REQUEST_ACTIONS } from 'src/common/constants';
import { VersionNotFoundException } from 'src/common/exception/version-notfound.exception';
async function run() {

    const app = await NestFactory.createApplicationContext(AppModule);
    //const appService = app.get(AppService);
    const retailService = app.get(RetailService);
    const { domain, action, version } = workerData.context;
    let response, service;
    if (version === '1.1.0') {
        service = retailService.get110(domain);
    } else if (version === '0.9.4') {
        service = retailService.get110(domain);
    } else {
        throw new VersionNotFoundException();
    }
    switch (action) {
        case REQUEST_ACTIONS.init:
            response = service.init(workerData);
            break;
        case REQUEST_ACTIONS.cancel:
            response = service.cancel(workerData);
            break;
        case REQUEST_ACTIONS.confirm:
            response = service.confirm(workerData);
            break;
        case REQUEST_ACTIONS.rating:
            response = service.rating(workerData);
            break;
        case REQUEST_ACTIONS.search:
            response = service.search(workerData);
            break;
        case REQUEST_ACTIONS.status:
            response = service.status(workerData);
            break;
        case REQUEST_ACTIONS.support:
            response = service.support(workerData);
            break;
        case REQUEST_ACTIONS.track:
            response = service.track(workerData);
            break;
        case REQUEST_ACTIONS.update:
            response = service.update(workerData);
            break;
        case REQUEST_ACTIONS.select:
            response = service.select(workerData);
            break;
        default:
            throw new Error('Invalid action');
    }
    parentPort.postMessage(response);
}


run();