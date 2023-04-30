const {Service,ServiceItem}=require("../models");
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
const getServices=async ()=>{
        try {
            const services=await Service.findAll();
            return services;
        } catch (error) {
            throw error;
        }
    }

const addServiceItem=async (request)=>{
    const {serviceId,images,price,description,itemType}=request;
    try {
        const newServiceItem=await ServiceItem.create({
            id:uuidv4(),
            serviceId,
            images,
            status:"EMPTY",
            price,
            description,
            itemType,
        });
        return newServiceItem;
    } catch (error) {
        throw error;
    }
    


}



module.exports={addService,addServiceItem,getServices};


