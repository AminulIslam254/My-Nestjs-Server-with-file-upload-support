import { Injectable } from "@nestjs/common";
import { Product } from "./products.model";

@Injectable()
export class productServices{
    products:Product[]=[];

    insertProduct(title:string,desc:string,price:string){
        const newProduct=new Product(Math.floor(Math.random()*10).toString(),"lol"+Math.floor(Math.random()*10).toString(),55);
        this.products.push(newProduct);
    }


}