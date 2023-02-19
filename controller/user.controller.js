const bcrypt=require('bcryptjs');
const {User}=require("../models");
const {v4: uuidv4} =require('uuid');
const jwt = require("jsonwebtoken");
const register=async (req,res)=>{

    try{
        const {email,password,username,fullname,phone}=req.body;
        console.log("type:",typeof(password));
        const salt=bcrypt.genSaltSync(10);
        const hashPassword=bcrypt.hashSync(password,salt);
        const newUser=await User.create({
                id:uuidv4(),
                role:"client",
                email,
                hashPassword,
                username,
                fullname,
                phone
        });
        res.status(201).send(newUser);
    }
    catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}
const login=(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=User.findOne({
            where:{
                email,
            }
        });
        if(user){
            const token=jwt.sign({
                id:user.id,
                email:user.email,
                username:user.username,
                role:user.role
            },"tanvuu998",{
                expiresIn:3600*24,
            });
            res.status(200).send(token);
        }
        else{
            res.status(401).send("email not exist");
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Bad request");
    }

}
module.exports={register,login};
