const  express = require('express');
const { registerUser,login ,currentUser} = require('../controller/login_controller');
const  login_router  = express.Router();


login_router.post('/register',registerUser )
login_router.post('/login',login)
login_router.get('/userData',currentUser)

module.exports = login_router   