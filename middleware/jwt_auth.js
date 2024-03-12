const jwt  = require('jsonwebtoken')

const verifyToken =  (req,res,next)=>{
 const token = req.headers.authorization;
 if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token is missing or invalid' });
}
const userToken = token.split(" ")[1];
console.log(userToken);
  if(token){
      try{
      const  decodedToken = jwt.verify(userToken,"abc@123");
      console.log(decodedToken);
      req.user = decodedToken.user ;
      next()
      
    }
 
 catch(error){
    console.error('Token verification failed:', error.message);
    console.error('Error verifying token:', error);
    // Log the error message
    res.status(400).send('Invalid token: ' + error.message);
 }
            
}
if(!token){
    res.status(401).send("user is  unauthorized")
}
}
exports.verifyToken = verifyToken

 