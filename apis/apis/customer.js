import { webURL } from "@/confin";
import axios from "axios";

export default {
    addCustomer:(args)=>{

        return axios.post( webURL +'/api/customer/addCustomer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCustomers:(args)=>{

       return axios.post( webURL+'/api/customer/getCustomers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCustomer:(args)=>{

       return axios.post('/api/customer/deleteCustomer', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

}