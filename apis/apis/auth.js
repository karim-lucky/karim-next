import { webURL } from "@/confin";
import axios from "axios"

export default {
    // addCompany:(args)=>{

    //     return axios.post('/api/auth/addCompany', {  
    //         ...args,
    //         token:localStorage.getItem('token')
    //     });

    // },
    cp:(args)=>{

        return axios.post('/api/auth/cp', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    addUser:(args)=>{

        return axios.post('/api/auth/addUser', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    deleteUser:(args)=>{

        return axios.post('/api/auth/deleteUser', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    getUsers:(args)=>{

        return axios.post('/api/auth/getUsers', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    checkSession:(args)=>{

        return axios.post('/api/auth/checkSession', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    sp:(args)=>{

        return axios.post('/api/auth/register', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    login:(args)=>{

        return axios.post(webURL+'/api/auth/login', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },

    // saveBankAccount:(args)=>{

    //    return axios.post('/api/bank/saveBankAccount', {  
    //         ...args,
    //         token:localStorage.getItem('token')
    //     });

    // }






}