import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { ServiceConvertorModule } from './service-convertor.module';

const logger = new Logger('SERVICE_CONVERTOR');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ServiceConvertorModule, {
    name: 'SERVICE_CONVERTOR',
    transport: Transport.TCP,
    options: {
      host: 'service-convertor',
      port: 3002,
    },
  });

  await app.listen();

  logger.log(`Listening SERVICE_CONVERTOR at port 3002`);
}
bootstrap();
