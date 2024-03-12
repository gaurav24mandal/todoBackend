const express = require('express');
const router =  express.Router()
//const {customer} = require('../controller/user_controller');
const {data,printData} = require('../controller/user_controller');
const { verifyToken } = require('../middleware/jwt_auth');

router.use(verifyToken)
router.post('/',data)
router.get('/print',printData) 

module.exports =  router;