const express = require('express');
const user = express.Router();
const {Register,Login} = require('../controllers/user.controller')
const {isAuth} = require('../middlewares/isAuth')
user.post('/register',Register);
user.post('/login',Login);
user.get('/current',isAuth, (req,res) => {res.send({user:req.user})})

module.exports = user