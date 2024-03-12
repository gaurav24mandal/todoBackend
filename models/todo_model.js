const  mongoose = require('mongoose');

const todoSchema =  new mongoose.Schema({
    userId:{
        type:String,
        required: true
    },
     content:{
        type : String,
        required: true,
    },
  
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"loginModel"    
    },
    
},{timestamps:true})
 
 module.exports = mongoose.model("Todo",todoSchema)  