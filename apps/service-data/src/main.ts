import { RmqService } from '@ft/common';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DATA_SERVICE } from '../../../libs/common/src/constants/services';
import { ServiceDataModule } from './service-data.module';

const logger = new Logger('SERVICE_DATA');

async function bootstrap() {
  // Bootstrap as microservice SERVICE_DATA
  const app = await NestFactory.create(ServiceDataModule);

  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions(DATA_SERVICE));

  await app.startAllMicroservices();
  logger.log(`Listening SERVICE_DATA...`);
}
bootstrap();
