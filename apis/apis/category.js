import axios from "axios"

export default {
    addCategory:(args)=>{

        return axios.post('/api/category/addCategory', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    getCategories:(args)=>{

       return axios.post('/api/category/getCategories', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    deleteCategory:(args)=>{

       return axios.post('/api/category/deleteCategory', {  
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