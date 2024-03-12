const express = require('express');
const  todo_router = express.Router();
const {verifyToken}= require('../middleware/jwt_auth')
const{todos, getMyTodos, updateData, deleteData} = require('../controller/todo_controller')
// Check if verifyToken is a function
todo_router.use(verifyToken);

//  all the  crud  operations 
// creating  todos
todo_router.post('/work',todos)
// getting  all the  data 
todo_router.get('/myData',getMyTodos)
// updating content 
todo_router.put('/data/:id',updateData)
//delete data
 todo_router.delete('/delete/:id',deleteData)
module.exports = todo_router     