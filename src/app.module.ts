import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { FileUploadController } from './file-upload/file-upload.controller';
import { FileUploadModule } from './file-upload/file-upload.module';
import { FileUploadService } from './file-upload/file-upload.service';
import { MulterModule } from '@nestjs/platform-express';


@Module({
  imports: [ProductsModule, FileUploadModule],
  controllers: [AppController, FileUploadController],
  providers: [AppService,FileUploadService],
})
export class AppModule {}
