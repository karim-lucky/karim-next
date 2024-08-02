"use client"


import product from "@/apis/apis/product"
import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"



export default()=>{

    let [products,setProducts]=useState([])

    useEffect(function(){
          
       axios.get("api/myProduct").then(function(resp){
        console.log(resp.data);
        setProducts(resp.data);
       })
    

    },[])

function addProducts(){

    axios.post("/api/myProduct",{

        
           name: prompt("enter the name"),
         price: +prompt("enter the price"),
         location: prompt("enter the locatin")
         
    }
    ).then(function(response){
        console.log(response.data);
        if(response.data.success){
            toast.success("data save successfull")
        }
    })  
    


}


return  <div>
            <button onClick={addProducts}>Add products</button>
        <table border="1">
              {/* {
                axios.get("/api/myProduct").then(function(data){

                })
              } */}


         {

            products.map(function(prod){
               return <tr>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.location}</td>
                </tr>
            })
         }
        </table>

</div>

}