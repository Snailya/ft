import { Controller, Get } from '@nestjs/common';
import { ServiceConvertorService } from './service-convertor.service';

@Controller()
export class ServiceConvertorController {
  constructor(private readonly serviceConvertorService: ServiceConvertorService) {}

  @Get()
  getHello(): string {
    return this.serviceConvertorService.getHello();
  }
}
