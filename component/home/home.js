
import { useEffect, useState } from "react"
import Card from "../card/card"
import "./home.css"
import axios from "axios"
 
export default function Home(){

let [product,setProduct]=useState([])
let [searchItem,setSearchItem]=useState("")

    useEffect(function(){
        async function Ads(){
            let response=await axios.get('/api/myProduct');
              console.log(response.data);
              setProduct(response.data)
        }
        Ads();
    } ,[])

    let handleSearch=(evt)=>{
          setSearchItem(evt.target.value)  

    }
    return <div >
           <input type="text" onChange={handleSearch}></input>
           <div id="mainBox">
            {
                   product
                //    .filter((value)=>value.title.toLowerCase().includes(searchItem.toLowerCase()))
                   .map(function(myPro){

                   return <Card abc={myPro}></Card>
                   })
            }
           </div>
           
         
    </div>
}