import axios from "axios"

export default {


    //get bank payment by id
    gbtid: (args) => {

        return axios.post('/api/bank/gbtid', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // get branch transfer
    gbt: (args) => {

        return axios.post('/api/bank/gbt', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // add bank transfer
    abt: (args) => {

        return axios.post('/api/bank/abt', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    //  delete bank transfer
    dbt: (args) => {

        return axios.post('/api/bank/dbt', {
            ...args,
            token: localStorage.getItem('token')
        });

    },

    //  ****************************


    //get bank payment by id
    gbpid: (args) => {

        return axios.post('/api/bank/gbpid', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // get branch payments
    gbp: (args) => {

        return axios.post('/api/bank/gbp', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // add bank payment
    abp: (args) => {

        return axios.post('/api/bank/abp', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    //  delete bank payment
    dbp: (args) => {

        return axios.post('/api/bank/dbp', {
            ...args,
            token: localStorage.getItem('token')
        });

    },

    //  ****************************

    //get bank receipt by id
    gbrid: (args) => {

        return axios.post('/api/bank/gbrid', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // get branch receipts
    gbr: (args) => {

        return axios.post('/api/bank/gbr', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    // add bank receipt
    abr: (args) => {

        return axios.post('/api/bank/abr', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    //  delete bank receipt
    dbr: (args) => {

        return axios.post('/api/bank/dbr', {
            ...args,
            token: localStorage.getItem('token')
        });

    },




    //  fetch transaction detail from account statement page
    ftd: (args) => {

        return axios.post('/api/bank/ftd', {
            ...args,
            token: localStorage.getItem('token')
        });

    },
    getAccountActivity: (args) => {

        return axios.post('/api/bank/getAccountActivity', {
            ...args,
            token: localStorage.getItem('token')
        });

    },

    saveBankAccount: (args) => {

        return axios.post('/api/bank/saveBankAccount', {
            ...args,
            token: localStorage.getItem('token')
        });

    },

    getBankAccounts: (args) => {

        return axios.post('/api/bank/getBankAccounts', {
            ...args,
            token: localStorage.getItem('token')
        });

    },

    deleteBankAccount: (args) => {

        return axios.post('/api/bank/deleteBankAccount', {
            ...args,
            token: localStorage.getItem('token')
        });

    },





}