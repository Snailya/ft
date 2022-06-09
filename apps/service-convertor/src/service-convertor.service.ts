import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceConvertorService {
  getHello(): string {
    return 'Hello World!';
  }
}
