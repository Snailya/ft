import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ServiceDataModule } from './service-data.module';

const logger = new Logger('SERVICE_DATA');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ServiceDataModule, {
    name: 'SERVICE_DATA',
    transport: Transport.TCP,
    options: {
      host: 'service-data',
      port: 3001,
    },
  });
  await app.listen();

  logger.log(`Listening SERVICE_DATA at port 3001`);
}
bootstrap();
