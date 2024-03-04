const mongoose = require("mongoose")

const userschema=mongoose.Schema({
    name:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
    isadmin:{required:true,type:Boolean,default:false}
})

module.exports=mongoose.model("users",userschema)