import { DATA_SERVICE } from '@ft/common';
import { FileUploadedEvent } from '@ft/common/events/files-uploaded.event';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(@Inject(DATA_SERVICE) private readonly dataClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  uploadFiles(files: Array<Express.Multer.File>) {
    this.logger.log(`uploading files: ${files.map(f => f.originalname).join(", ")}`);
    return this.dataClient.emit(
      'FILES_UPLOADED' ,
      new FileUploadedEvent(files),
    );
  }
}
