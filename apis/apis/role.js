import axios  from "axios";

export default{
    getRoleById:(args)=>{

        return axios.post('/api/role/getRoleById', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    deleteRole:(args)=>{

        return axios.post('/api/role/deleteRole', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    getRoles:(args)=>{

        return axios.post('/api/role/getRoles', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
    addRole:(args)=>{

        return axios.post('/api/role/addRole', {  
            ...args,
            token:localStorage.getItem('token')
        });

    },
}