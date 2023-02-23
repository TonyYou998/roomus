const express=require('express');
const { register, login } = require('../controller/user.controller');
const { checkExistedEmail, validateEmail } = require('../middlewares/accounts/email');
const userRouter=express.Router();

userRouter.post("/register",validateEmail,checkExistedEmail,register);
userRouter.post("/login",validateEmail,login);
module.exports={userRouter};