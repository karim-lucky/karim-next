import axios from 'axios';

export default {
    gsaid:(args)=>{

        return axios.post('/api/stock-adjustment/gsaid', {  
            ...args,
            token:localStorage.getItem('token')
        });
    },
    asao:(args)=>{

        return axios.post('/api/stock-adjustment/asao', {  
            ...args,
            token:localStorage.getItem('token')
        });
    },
    dsa:(args)=>{

        return axios.post('/api/stock-adjustment/dsa', {  
            ...args,
            token:localStorage.getItem('token')
        });
    },
    gsa:(args)=>{

        return axios.post('/api/stock-adjustment/gsa', {  
            ...args,
            token:localStorage.getItem('token')
        });
    },
    asai:(args)=>{

        return axios.post('/api/stock-adjustment/asai', {  
            ...args,
            token:localStorage.getItem('token')
        });
    }

}