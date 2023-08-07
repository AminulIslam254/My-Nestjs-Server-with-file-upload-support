import { Controller, Post,Body } from "@nestjs/common";
import { productServices } from "./products.service";

@Controller('products')
export class productController{

    constructor(private readonly productServices:productServices){}


    @Post()
    addProducts(
        @Body('title') prodTitle:string,
        @Body('description') prodDesc:string,
        @Body('price') prodPrice:number,
    ):any{
        console.log(prodTitle,prodDesc,prodPrice);
        const generatedID= this.productServices.insertProduct(prodTitle,prodDesc,prodPrice);
        return {id:generatedID}
    }
} 