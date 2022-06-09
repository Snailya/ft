import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(@Inject('SERVICE_DATA') private readonly client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  uploadFiles(files: Array<Express.Multer.File>) {
    return this.client.send(
      { cmd: 'FILES_UPLOADED' },
      new FileUploadedEvent(files),
    );
  }
}
