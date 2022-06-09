import { Module } from '@nestjs/common';
import { ServiceConvertorController } from './service-convertor.controller';
import { ServiceConvertorService } from './service-convertor.service';

@Module({
  imports: [],
  controllers: [ServiceConvertorController],
  providers: [ServiceConvertorService],
})
export class ServiceConvertorModule {}
