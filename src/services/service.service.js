const {Service}=require("../models");
const { v4: uuidv4 } = require("uuid");
const addService=async (request)=>{
    const {serviceName,bussinessId,image,serviceType,description,address}=request;
    try {
       
        const newService=await Service.create({
            id:uuidv4(),
            serviceName,
            bussinessId,
            image,
            serviceType,
            description,
            address,
        });
        return newService;
    } catch (error) {
        throw error;
    }

}

module.exports={addService};