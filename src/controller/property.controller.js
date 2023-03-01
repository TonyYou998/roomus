const{v4:uuidv4}=require('uuid');
const {Property,PropertyItem,PropertyTag} = require("../../models");



const addProperty=async (req,res)=>{
    try {
        const formData=new FormData();
        for(const key in req.body){
            formData.append(key,req.body[key]);
        }
        const propertyName=formData.get("propertyName");
        const address=formData.get("address");
        const description=formData.get("description");
        const tagId=formData.get("tagId");

        let image1,image2,image3;
        const arrayImage=req.files;
        arrayImage.map((item,index)=>{
            const {filename}=item;
            switch(index){
                case 0:
                    image1=filename;
                    break;
                case 1:
                    image2=filename;
                    break;
                case 2:
                    image3=filename;
                    break;
                default:
                    image1=filename;

            }

            
        }
        )
        
        const property=await Property.create({
            id:uuidv4(),
            propertyName,
            address,
            description,
            // image:`http://34.171.191.196:3000/public/images/property/${filename}`
            image1:`http://localhost:3000/public/images/property/${image1}`,
            image2:`http://localhost:3000/public/images/property/${image2}`,
            image3:`http://localhost:3000/public/images/property/${image3}`,
            tagId,
           
    
        });
        res.status(201).send(property);

    } catch (error) {
        console.log(error);
        res.status(503).send(error);
    }
 

}
const addPropertyItem=async (req,res)=>{
    try{
            const formData=new FormData();
            for(const key in req.body){
                formData.append(key,req.body[key]);
            }
            const roomName=formData.get("roomName");
            const propertyId=formData.get("propertyId");
            const price=formData.get("price");
            const description=formData.get("description");
            const arrayImage=req.files;
            let image1,image2,image3,image4,image5;
            
            const propertyItem=await PropertyItem.create({
                id:uuidv4(),
                roomName,
                propertyId,
                price,
                description,
                // need to change this property
                roomStatus:0
            });
            
            
                res.status(201).send(propertyItem);
    }   
    catch(error){
            console.log(error);
            res.status(400).send(error);

    } 

}
const getAllTagId=async (req,res)=>{
    
    try {
        const tags=await PropertyTag.findAll();
        res.status(200).send(tags);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

}
const getPropertyByTagId=async (req,res)=>{
    try {
        const {tagId}=req.params;
        
        const properties=await Property.findAll({
            where:{
                tagId,
            }
        });
     
        res.status(200).send(properties);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }

}
const getPropertyById=async (req,res)=>{
    try {
        const {propertyId}=req.params;
        
        const property=await Property.findOne({
            where:{
                id:propertyId,
            }
        })
        res.status(200).send(property)
    } catch (error) {
        console.error();
        res.status(400).send(error);
    }

}
module.exports={addProperty,addPropertyItem,getAllTagId,getPropertyByTagId,getPropertyById};