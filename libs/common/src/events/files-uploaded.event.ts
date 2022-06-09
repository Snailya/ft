export class FileDto {
  name: string;
  buffer: Buffer;
}

export class FileUploadedEvent {
  files: Array<FileDto>;

  constructor(files: Array<Express.Multer.File>) {
    this.files = files.map((f) => {
      return {
        name: f.originalname,
        buffer: f.buffer,
      };
    });
  }
}
