const mongoose = require("mongoose")

const theaterschema=mongoose.Schema({
    name:{required:true,type:String},
    address:{required:true,type:String},
   phone:{required:true,type:String},
   email:{required:true,type:String},
isactive:{default:false,type:Boolean},
owner:{type:mongoose.Schema.Types.ObjectId,ref:"users"}
})

module.exports=mongoose.model("theaters",theaterschema)