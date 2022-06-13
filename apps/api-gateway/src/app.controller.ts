import { DATA_SERVICE } from '@ft/common';
import {
  Controller,
  Get,
  Inject,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { AppService } from './app.service';
import { FilesUploadDto } from './dtos/files-upload.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('files/upload')
  @UseInterceptors(FilesInterceptor('files'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'List of files',
    type: FilesUploadDto
  })
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.appService.uploadFiles(files);
  }
}
