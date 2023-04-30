const service = require("../services/service.service");
const serviceService=require("../services/service.service");
const {validationResult}=require('express-validator');
const HttpError = require("../utils/error");

const getServiceByBusinessId = async (req, res, next) => {
  try {
    const services = await service.getServiceByBusinessId(req);
    res.status(201).json({
      services,
    });
  } catch (error) {
    next(error);
  }
};


const addService=async (req,res,next)=>{
    try {
          
        const errors=validationResult(req);
        if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
            const request=req.body;
         const dto=await serviceService.addService(request);
        res.status(201).send(dto);
    } catch (error) {
        
      next(error);
    }

}
const getServiceItems=async (req,res,next)=>{
    try {
        const {serviceId}=req.params;
        const dto=await serviceService.getServiceItemsByServiceId(serviceId);
        return res.status(200).send(dto);
    } catch (error) {
        next(error);
    }
}
const addServiceItem=async (req,res,next)=>{
    try {
        const errors=validationResult(req);
        if (!errors.isEmpty()) throw new HttpError(`Invalid inputs passed!`, 422);
        const request=req.body;
        const dto=await serviceService.addServiceItem(request);
        res.status(201).send(dto);
    } catch (error) {
        next(error);
    }

}
const getServices=async (req,res,next)=>{
    try {
          
       
         const dto=await serviceService.getServices();
         res.status(201).send(dto);
    } catch (error) {
        
      next(error);
    }

}

module.exports={addService,getServices,addServiceItem,getServiceItems,getServiceByBusinessId};
