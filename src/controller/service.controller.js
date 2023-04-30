const serviceService=require("../services/service.service");
const {validationResult}=require('express-validator');
const HttpError = require("../utils/error");
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
module.exports={addService,getServiceItems};