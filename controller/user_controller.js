const  customer = require('../api/customer.json')
const userData =  require('../models/user_model')
 const data  = async (req,res)=>{
       const{name,phone,address}= req.body ;
       
         if(!name || !phone){
            res.status(400).send('bad request')
         }
       
       
        try{
          await userData.create({
            user_id:req.user.id, 
            name,
            phone,
            address
           
          }) 
          res.status(200).send(' phone no register sucessfully')
        }catch(error){ 
                console.log(error);
               res.status(500).send('here')
        }
        }

        const  printData  = async(req,res)=>{
                 if(req.body.name){
                  console.log('name');
                  res.status(200).send(req.body.name)
                 }
        }

exports.data = data
exports.printData = printData
//exports.customer = customer ;