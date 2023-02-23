const{v4:uuidv4}=require('uuid');
const {Property} = require("../../models");

const addProperty=async (req,res)=>{
    try {
        const formData=new FormData();
        for(const key in req.body){
            formData.append(key,req.body[key]);
        }
        const propertyName=formData.get("propertyName");
        const address=formData.get("address");
        const description=formData.get("description");

        const {filename}=req.file;

        const property=await Property.create({
            id:uuidv4(),
            propertyName,
            address,
            description,
            image:`http://34.171.191.196:3000/public/images/property/${filename}`
           
    
        });
        res.status(201).send(property);

    } catch (error) {
        res.status(503).send(error);
    }
 

}
module.exports={addProperty};