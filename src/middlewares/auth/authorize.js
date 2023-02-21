const authorize=(roleArr)=>(req,res,next)=>{
    const {user}=req;
    if(roleArr.findIndex((item)=>item===user.role)>-1){
        next();
    }
    else{
        res.status(401).send("permission required");
    }


}
module.exports={authorize};