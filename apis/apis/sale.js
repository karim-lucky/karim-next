import axios from "axios";

export default {
    changeOrderStatus:(args)=>{

        return axios.post('/api/sale/changeOrderStatus', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     deleteInvoice:(args)=>{

        return axios.post('/api/sale/deleteInvoice', {  
            ...args,
            token:localStorage.getItem('token')
        });

     },
    getOrders:(args)=>{

        return axios.post('/api/sale/getOrders', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getReceiptById:(args)=>{

        return axios.post('/api/sale/getReceiptById', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
    },
    getInvoiceById:(args)=>{

        return axios.post('/api/sale/getInvoiceById', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getSaleInvoicesBulk:(args)=>{

        return axios.post('/api/sale/getSaleInvoicesBulk', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    getSaleInvoices:(args)=>{

        return axios.post('/api/sale/getSaleInvoices', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getReceipts:(args)=>{

        return axios.post('/api/sale/getReceipts', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     makeReceipt:(args)=>{

        return axios.post('/api/sale/makeReceipt', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     deleteReceipt:(args)=>{

        return axios.post('/api/sale/deleteReceipt', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     addCreditNotePayment:(args)=>{

        return axios.post('/api/sale/addCreditNotePayment', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getOutStandingInvoices:(args)=>{

        return axios.post('/api/sale/getOutStandingInvoices', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     getOutStandingCredits:(args)=>{

        return axios.post('/api/sale/getOutStandingCredits', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     deleteCreditNote:(args)=>{

        return axios.post('/api/sale/deleteCreditNote', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     addCreditNote:(args)=>{

        return axios.post('/api/sale/addCreditNote', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

     addInvoice:(args)=>{

        return axios.post('/api/sale/addInvoice', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     addOrder:(args)=>{

        return axios.post('/api/sale/addOrder', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getSingleProduct:(args)=>{

        return axios.post('/api/sale/getSingleProduct', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     checkQty:(args)=>{

        return axios.post('/api/sale/checkQty', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
}