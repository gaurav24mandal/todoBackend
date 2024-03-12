const  mongoose =   require('mongoose');
const loginSchema = mongoose.Schema

const  loginModel =  new loginSchema({
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required: true    
    }
},{timestamps: true}
) 
module.exports  =  mongoose.model('loginModel',loginModel)