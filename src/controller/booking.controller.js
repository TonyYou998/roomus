const bookingService=require("../services/booking.service");
const { validationResult } = require("express-validator");
const HttpError = require("../utils/error");
const booking=async (req,res,next)=>{
    try {
        const errors = validationResult(req);
      
    if (!errors.isEmpty())
      throw new HttpError(
        `Invalid input passed. Please check your input again`,
        422
      );
     
        const request=req.body;
        const dto=await bookingService.booking(request);
       
        res.status(201).send(dto);
        
    } catch (error) {
        next(error);
    }

}

module.exports={booking}