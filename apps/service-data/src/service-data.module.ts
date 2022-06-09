import { DatabaseModule } from '@ft/common';
import { databaseProviders } from '@ft/common/database/database.providers';
import { Module } from '@nestjs/common';
import { ServiceDataController } from './service-data.controller';
import { ServiceDataService } from './service-data.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ServiceDataController],
  providers: [ServiceDataService, ...databaseProviders],
})
export class ServiceDataModule {}
