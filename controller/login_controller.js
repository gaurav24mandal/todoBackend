const  loginModel = require('../models/login_model');
const  jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const registerUser = async (req,res)=>{
     const{username, email,password}= req.body;
     if(!username ||!email||  !password){
          res.status(400).send('fill all details');
     }
      const userAvailabe =await loginModel.findOne({email})
      if(userAvailabe){
          res.status(400).send('user already  exists ')
      }
      const  hashPassword  = await bcrypt.hash(password,10)
      try{
           await loginModel.create({
               username ,
               email,
               password: hashPassword
           })
           res.status(200).send('user register');
           
      }
      catch(error){
          console.log(error);
          res.status(500).send(error)
      }
}

const  login = async (req,res)=>{
   try { const{email, password}= (req.body);
     if(!email || !password){  
          res.status(400).send('invalid credentials');
     }
     const  user = await loginModel.findOne({email});
     //console.log(user.id);
     if(user && (await bcrypt.compare(password,user.password))){
         const token = jwt.sign({
               user:{
                  email : user.email,
                  id: user.id 
               },
          },"abc@123",{expiresIn:"60m"})
          res.status(200).send({token})}}
          catch(error){
               res.send(error)
          }
}

const  currentUser = (req,res)=>{
     res.send(req.body)
}

exports.registerUser = registerUser
exports.login = login
exports.currentUser = currentUser  