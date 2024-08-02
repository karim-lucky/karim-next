import { Product } from "@/models/products";
import axios from "axios";
import { NextResponse } from "next/server";



export async function GET(req){

     let myProd=await Product.find();


     return NextResponse.json(myProd)

}



export async function POST(req){


    let data=await req.json();

    let newProduct=new Product(data);
    newProduct.save();

    return NextResponse.json({
        success:true,
    })
}


export async function Delete(req) {
    
    
}