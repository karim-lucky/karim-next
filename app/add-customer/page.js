
"use client"


import customer from "@/apis/apis/customer"
import product from "@/apis/apis/product"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"





export default function CustomerAdd(){


    let [customers,setCustomers]=useState([])
        useEffect(()=>{
            customer.getCustomers().then((response)=>{
                setCustomers(response.data)
              })
        },[])

const addCustomers=()=>{
       
         let newCustomer={
            customer_b_name:"karim Bussiness",
            customer_f_name:"karim lucky",
            customer_b_address:"south waziristan"

         }
         customer.addCustomer(newCustomer).then((response)=>{
               console.log(response.data);
               setCustomers([...customers,newCustomer]);
               toast.success("customer added successfull");

         })

}
const deleteCustomer=()=>{
            
}

    return    <div>

       <button onClick={addCustomers}>add custoner</button>

       
       <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">cuatomer name</th>
      <th scope="col">customer Bussiness</th>
      <th scope="col">customer address</th>
      
    </tr>
  </thead>
  <tbody>
    {
        customers.map((value)=>{

           return <tr>
              
             <td>{value.customer_f_name}</td>
             <td>{value.customer_b_name}</td>
             <td>{value.customer_b_address}</td>
          </tr>
        })
    }
    
    
 
  </tbody>
</table>



    </div>
}