const { default: mongoose, Schema } = require("mongoose");




let productsSchema=mongoose.Schema({
    name:String,
    price:String,
    location:String,

})
  export let  Product=mongoose.models.product || mongoose.model("product",productsSchema);