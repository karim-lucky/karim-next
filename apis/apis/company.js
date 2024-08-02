import axios from "axios";

export default{
    gpos:(args)=>{

        
        return axios.post('/api/company/gpos', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    dc:(args)=>{

        
        return axios.post('/api/admin/company/dc', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    gcs:(args)=>{

        
        return axios.post('/api/admin/company/gcs', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },

    //admin part
    updateCompany:(args)=>{

        return axios.post('/api/company/updateCompany', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     getCompany:(args)=>{

        return axios.post('/api/company/getCompany', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     }
}