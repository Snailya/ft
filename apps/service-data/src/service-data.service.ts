import { CONVERTING_SERVICE } from '@ft/common';
import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ServiceDataService {
  constructor(
    @Inject(CONVERTING_SERVICE) private readonly convertingClient: ClientProxy
  ) {}

  private readonly logger = new Logger(ServiceDataService.name);

  getHello(): string {
    return 'Hello World!';
  }

  handleFilesUploaded(data: FileUploadedEvent) {
    // business log
    this.logger.log('persisting...');

    data.files.forEach( file => {
      this.logger.log(file.name);
      this.convertingClient.emit('FILE_UPLOADED', file);
      }
    )
  }
}
