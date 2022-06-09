import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_DATA',
        transport: Transport.TCP,
        options: {
          host: 'service-data',
          port: 3001,
        },
      },
      {
        name: 'SERVICE_CONVERTOR',
        transport: Transport.TCP,
        options: {
          host: 'service-convertor',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
