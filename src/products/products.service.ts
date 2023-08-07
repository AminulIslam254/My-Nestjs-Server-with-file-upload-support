import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class productServices{
    products:Product[]=[];

    insertProduct(title:string,desc:string,price:number){
        const newProduct=new Product(title,desc,price);
        this.products.push(newProduct);
        return [...this.products]
    }


}