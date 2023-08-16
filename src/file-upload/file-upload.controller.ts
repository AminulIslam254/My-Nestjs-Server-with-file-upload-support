import { Controller,Post } from '@nestjs/common';
import {FileUploadService} from './file-upload.service'
import { UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators';
import { diskStorage } from 'multer';
@Controller('file-upload')
export class FileUploadController {
    constructor(private readonly FileUploadService:FileUploadService){}

    @Post('/file')
    @UseInterceptors(FileInterceptor('myFile',{
        storage:diskStorage({
            destination:'./files',
            filename:(req,file,callback)=>{
                const splitArr=file.originalname.split('.');
                const ext=splitArr[splitArr.length-1];
                const myFilename=`${splitArr[0]}.${ext}`;
                callback(null,myFilename);
            }
        })
    })) //Name or FieldName of the file that will be sent through API
    loadFile1(@UploadedFile() file:Express.Multer.File){
       console.log(file,"here");
       return "hi"
    }

}
