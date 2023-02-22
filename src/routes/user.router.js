const express=require('express');
const { register, login } = require('../controller/user.controller');
const { checkExistedEmail, validateEmail } = require('../middlewares/accounts/email');
const userRouter=express.Router();


userRouter.get("",(req,res)=>{
        res.send("hello");
});
userRouter.post("/register",validateEmail,checkExistedEmail,register);
userRouter.post("/login",login);
module.exports={userRouter};