import { Module } from '@nestjs/common';

import { productController } from './products.controller';
import { productServices } from './products.service';

@Module({
    controllers: [productController],
    providers: [productServices],
})
export class ProductsModule {}