

"use client"

import product from "@/apis/apis/product"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";






export default function AddProduct() {


    let [products, setProduct] = useState([]);

    useEffect(function () {
        product.getProducts().then((response) => {
            console.log(response.data)
            setProduct(response.data)
        })
    }, [])



    let addProduct = () => {

        let newProduct = {

            product_name: "ballon",
            product_category: "66a3bf608c02f5c9dfac6a52",
            op_balance: 450,
            product_unit: "6638e6e1faa8b0418b4b1a62"

        }
        product.addProduct(newProduct).then((response) => {
            console.log(response.data);
            toast.success("successfull add te product");
            setProduct([...products, newProduct])
        })
    }
      let deleteProducts=(prod)=>{
            product.deleteProduct({_id:prod._id}).then(function(response){
                   console.log(response.data)


                   setProduct(products.filter((value)=>{
                      return value._id!=prod._id;
                   }))
            })
      }
        
    return <div>


        <button onClick={addProduct}>add product</button>

        <table border="1">
            <thead>
                <tr>
                    <th>product name</th>
                    <th>product catageries</th>
                    <th>product-op balance</th>
                    <th>product-unit</th>
                </tr>
            </thead>
            <tbody>


                {
                    products.map((value) => {
                        return <tr>
                            <td>{value.product_name}</td>
                            <td>{value.product_category}</td>
                            <td>{value.op_balance}</td>
                            <td>{value.product_unit}</td>
                            <td> <button onClick={()=>deleteProducts(value)}>delete</button></td>
                        </tr>
                    })
                }


            </tbody>
        </table>




    </div>
}