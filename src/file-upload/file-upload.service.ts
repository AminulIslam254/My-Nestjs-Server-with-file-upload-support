import { Injectable } from '@nestjs/common';
import { UploadedFile } from '@nestjs/common/decorators';

@Injectable()
export class FileUploadService {
    loadFile(@UploadedFile() file:Express.Multer.File){
       
    }
}
