import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ServiceDataService {
  private readonly logger = new Logger(ServiceDataService.name);

  getHello(): string {
    return 'Hello World!';
  }

  handleFilesUploaded(data: FileUploadedEvent) {
    // business log
    this.logger.log('persist');

    return data.files.map((f) => f.name);
  }
}
