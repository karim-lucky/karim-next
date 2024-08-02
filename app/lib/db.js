

import mongoose from "mongoose";


export function connectDB(){



    // Karimwazir   cluseter name of db mongoess

    // karimlucky    user name

    //lucky8100@      password
    // karimlucky

    // mongodb+srv://karimlucky:lucky8100@@karimwazir.ajm0r37.mongodb.net/

    // mongodb+srv://karimlucky:<password>@karimwazir.ajm0r37.mongodb.net/

    mongoose.connect("mongodb+srv://karimlucky:karimlucky@karimwazir.ajm0r37.mongodb.net/?retryWrites=true&w=majority&appName=Karimwazir/cat").then(function(conn){
        console.log(conn);
        console.log("db connect successfull");
    }).catch(function(err){
        console.log(err);
    })
}