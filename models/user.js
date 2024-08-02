


import mongoose, { mongo } from "mongoose";

let userSchema= mongoose.Schema({

    user_name: String,
    user_email: String,
    user_password:String
});
export let User=mongoose.models.user || mongoose.model("user",userSchema)