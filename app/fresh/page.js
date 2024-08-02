

"use client"

import axios from "axios"
import useSWR from "swr"

 




let  fetcher1= (...arg)=>{
    return  axios.get(...arg).then(resp => resp.data)
 }


export default () => {


    

    let {data,error,isLoading}=useSWR('https://fakestoreapi.com/products/1',fetcher1)


    return <div>


        {isLoading ? <div>loading </div> : null}
        {error ? <div>oops error occesr </div> : null}

        {data ?
            <div>
                <div>{data.title}</div>
                <div>{data.price}</div>
                <div>{data.descripation}</div>
            </div> : null
        }



    </div>


}

// 'https://fakestoreapi.com/products/1'