import { CONVERTING_SERVICE, DatabaseModule, RmqModule } from '@ft/common';
import { databaseProviders } from '@ft/common/database/database.providers';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServiceDataController } from './service-data.controller';
import { ServiceDataService } from './service-data.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    RmqModule.register({
      name: CONVERTING_SERVICE,
    }),
  ],
  controllers: [ServiceDataController],
  providers: [ServiceDataService, ...databaseProviders],
})
export class ServiceDataModule {}
