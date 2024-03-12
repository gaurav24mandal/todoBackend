const express = require('express');
const mongoose = require('mongoose');
const app  = express();
const user_router = require('./routes/user_router.js')
const  login_router = require('./routes/login_routes.js');
const todo_router = require('./routes/todo_routes.js');
const e = require('express');
app.use(express.json());

app.use('/user',user_router)
app.use('/',login_router)  
app.use('/todo',todo_router) 

mongoose.connect("mongodb+srv://mandal:123@cluster0.xjcycr5.mongodb.net/")
.then(()=>{ 
     app.listen(3000,()=>{
          console.log('server  running on port 3000')
     })  
})
.catch((error)=>{   
     console.log('i m here',error.message);
})


