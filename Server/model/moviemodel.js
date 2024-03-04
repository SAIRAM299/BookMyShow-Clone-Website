const mongoose = require("mongoose")

const movieschema=mongoose.Schema({
    title:{required:true,type:String},
    description:{required:true,type:String},
    duration:{required:true,type:String},
   language:{required:true,type:String},
    genre:{required:true,type:String},
    releasedate:{required:true,type:String},
    poster:{required:true,type:String},
})

module.exports=mongoose.model("movies",movieschema)