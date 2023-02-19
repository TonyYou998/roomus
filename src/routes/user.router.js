const express=require('express');
const { register, login } = require('../../controller/user.controller');
const userRouter=express.Router();


userRouter.get("",(req,res)=>{
        res.send("hello");
});
userRouter.post("/register",register);
userRouter.post("/login",login);
module.exports={userRouter};