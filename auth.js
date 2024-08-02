import auth from "./apis/apis/auth";

const { createSlice } = require("@reduxjs/toolkit");

 




 let authSlice=createSlice({
   name:"authSlice",
   initialState:{
      name:"karimLucky",
      currentUser:{},
      users:[],
   },
   reducers:{
    setUser:function(puranaData, nyData){
      puranaData.currentUser = nyData.payload
  },
  addUser:function(puranaData, nyData){
                                      
      puranaData.users.push(nyData.payload)

  },
  removeUser:function(puranaData, nyData){

      puranaData.users.splice(nyData.payload, 1)

  },
  updateUser:function(puranaData, nyData){

      puranaData.users[nyData.payload.index] = nyData.payload.newName;


  }
   }
 })

 export let {setUser}  = authSlice.actions;
 export default authSlice;