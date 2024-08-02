import axios from "axios";

export default{
    getById:(args)=>{

        return axios.post('/api/journal/getById', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    getJournals:(args)=>{

        return axios.post('/api/journal/getJournals', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
    addJournal:(args)=>{

        return axios.post('/api/journal/addJournal', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
     deleteJournal:(args)=>{

        return axios.post('/api/journal/deleteJournal', {  
             ...args,
             token:localStorage.getItem('token')
         });
 
     },
}