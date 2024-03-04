const mongoose = require("mongoose")

const showschema=mongoose.Schema({
    name:{required:true,type:String},
    date:{required:true,type:Date},
   time:{required:true,type:String},
  movie:{required:true,type:mongoose.Schema.Types.ObjectId,ref:"movies"},
ticketprice:{required:true,type:String},
totalseat:{required:true,type:String},
theater:{type:mongoose.Schema.Types.ObjectId,ref:"theaters"},
})

module.exports=mongoose.model("shows",showschema)