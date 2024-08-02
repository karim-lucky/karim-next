import { webURL } from "@/confin";
import axios from "axios"

export default {

    addUnit:(args)=>{

        return axios.post('/api/products/addUnit', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     createBulk:(args)=>{

        return axios.post('/api/products/createBulk', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getUnits:(args)=>{

        return axios.post('/api/products/getUnits', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },


    getNominalAccountContainers:(args)=>{

        return axios.post('/api/products/getNominalAccountContainers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    updateNominalContainer:(args)=>{

        return axios.post('/api/products/updateNominalContainer', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    addNominalAccount:(args)=>{

        return axios.post('/api/products/addNominalAccount', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     deleteNominalAccount:(args)=>{

        return axios.post('/api/products/deleteNominalAccount', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },


     getNominalAccounts:(args)=>{

        return axios.post('/api/products/getNominalAccounts', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    addProduct:(args)=>{

        return axios.post(webURL+'/api/products/addProduct', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    
    
     
     getProductById:(args)=>{

        return axios.post('/api/products/getProductById', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     getProductsBulk:(args)=>{

        return axios.post('/api/products/getProductsBulk', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    getProducts:(args)=>{

       return axios.post(webURL+'/api/products/getProducts', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteProduct:(args)=>{

       return axios.post(webURL+'/api/products/deleteProduct', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

    // deleteBankAccount:(args)=>{

    //     return axios.post('/api/bank/deleteBankAccount', {  
    //          ...args,
    //          token:localStorage.getItem('token')
    //      });
         
    //  },





}