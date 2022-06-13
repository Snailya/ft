import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ServiceDataService } from './service-data.service';

@Controller()
export class ServiceDataController {
  constructor(private readonly serviceDataService: ServiceDataService) {}

  @Get()
  getHello(): string {
    return this.serviceDataService.getHello();
  }

  @EventPattern('FILES_UPLOADED')
  handleFilesUploaded(data: FileUploadedEvent) {
    this.serviceDataService.handleFilesUploaded(data);
  }
}
