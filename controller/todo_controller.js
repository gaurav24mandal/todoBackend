const  todoModel = require('../models/todo_model');
const { find } = require('../models/user_model');

const todos = async(req,res)=>{
        const {userId,content} = req.body
        console.log(req.body);
    
       if(!content || !userId)
       {
        res.status(400).send('please write')
               }
      try{
        await todoModel.create({
          userId,
          content,
        createdBy: req.user.id
         }) 
        return res.status(200).send(' content  saved')
      }
      catch(error){  
        res.send(error)
      }
}

const  getMyTodos =async (req,res)=>{
 
    try {
      const myData  = await todoModel.find({createdBy:req.user.id}).select('content -_id')
      const contentOnly = myData.map(todo => todo.content);
      res.send(contentOnly)
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async (req, res) => {
   
     const{content} = req.body
      try{
       await todoModel.findOneAndUpdate({userId:req.params.id},{content:content},{ new: true })
       .then(()=>{
        res.send('data updated')
       })
     }
    
    catch(error){
         res.send(error.message)
    }
  }
const  deleteData =async (req,res)=>{
  const user = await todoModel.findOne({ userId: req.params.id });
    if (!user) {
      return res.status(404).send('User not found');
    }
     try{
       await   todoModel.findOneAndDelete({userId: req.params.id})
          .then(()=>{
            res.send('data  deleted')
          })
        
     }catch(error){
      res.send(error.message)
     }
}
  
exports.todos = todos  
exports.getMyTodos = getMyTodos 
exports.updateData = updateData
exports.deleteData = deleteData