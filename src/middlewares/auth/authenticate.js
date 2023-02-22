const jwt=require('jsonwebtoken');
const authenticate=(req,res,next)=>{
    try {
        const token=req.header("Authorization").split(" ");
        console.log(token[1]);
        
        
        const decode=jwt.decode(token[1],"tanvuu998");
        if(decode){
            req.user=decode;
            next();
        }
        else{
            res.status(401).send("token is required");
        }

    } catch (error) {
        res.status(503).send(error);
    }

}
module.exports={authenticate};