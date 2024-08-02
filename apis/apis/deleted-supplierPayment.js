import axios from "axios"

export default {
    
    saveSuppierPayment:(args)=>{

       return axios.post('/api/supplierPayment/saveSuppierPayment', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    getSupplierPayments:(args)=>{

       return axios.post('/api/supplierPayment/getSupplierPayments', {  
            ...args,
            token:localStorage.getItem('token')
        });
        
    },

    deleteSupplierPayment:(args)=>{

        return axios.post('/api/supplierPayment/deleteSupplierPayment', {  
             ...args,
             token:localStorage.getItem('token')
         });
         
     },





}