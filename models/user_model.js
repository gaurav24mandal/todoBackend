const  mongoose = require('mongoose');
const  userSchema = mongoose.Schema;

const  userData  = new userSchema({
     name:{
        type:String,
        required:true,
    },
   
    phone:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('User',userData)














// const mongoose = require('mongoose');
// const loginSchema = mongoose.Schema;
 
// const registerUser = new loginSchema({
//   name:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type:String,
//     required:true,
//     unique:true
//   },
//   password:{
//     type:String,
//     required:true
//   }

// })
// module.exports = mongoose.model('loginModel',registerUser)