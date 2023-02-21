const{v4:uuidv4}=require('uuid');
const {Property} = require("../../models");

const addProperty=async (req,res)=>{
    try {
        const {propertyName,address,description}=req.body;
        
        const property=await Property.create({
            id:uuidv4(),
            propertyName,
            address,
            description
           
    
        });
        res.status(201).send(property);

    } catch (error) {
        res.status(503).send(error);
    }
 

}
module.exports={addProperty};