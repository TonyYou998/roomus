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
        console.log(error);
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
module.exports={addService,addServiceItem};