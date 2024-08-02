
"use client"

import axios from "axios"
import { useEffect } from "react"

import { useState } from "react"



 let MyUsersFon= ()=>{

let [users,setUsers]=useState([])


useEffect(function(){

   axios.get('api/signup').then(function(response){
    console.log(response.data)
    setUsers(response.data.users)
   })


},[])


return <div>

     <table border="1">
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(function(value){
                   return   <tr>
                        <td>{value._id}</td>
                        <td>{value.user_email}</td>
                        <td>{value.user_password}</td>
                        <button onClick={function(){
                        
                             axios.delete("api/signup?d="+value._id)


                        }}>delete</button>

                        <button onClick={()=>{

                              value.user_email=prompt("enter the email")
                            axios.put("api/signup",value);

                        }}>updata</button>
                    </tr>
                })
            }
        </tbody>
     </table>
     

</div>

}
export default MyUsersFon;