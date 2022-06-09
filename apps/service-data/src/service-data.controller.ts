import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ServiceDataService } from './service-data.service';

@Controller()
export class ServiceDataController {
  constructor(private readonly serviceDataService: ServiceDataService) {}

  @Get()
  getHello(): string {
    return this.serviceDataService.getHello();
  }

  @MessagePattern({ cmd: 'FILES_UPLOADED' })
  handleFilesUploaded(data: FileUploadedEvent) {
    return this.serviceDataService.handleFilesUploaded(data);
  }
}
