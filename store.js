import { configureStore } from "@reduxjs/toolkit";

 

import authSlice from "./auth";

export let myStore=configureStore({

reducer:authSlice.reducer,

})