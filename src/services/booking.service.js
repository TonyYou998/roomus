const {Booking}=require("../models");
const { v4: uuidv4 } = require("uuid");
const booking=async (request)=>{
    try {
        const {accountId,serviceItemId,bookingTime,checkinDay,checkoutDay}=request;
        const newBooking=await Booking.create({
            id:uuidv4(),
            accountId,
            serviceItemId,
            bookingTime,
            checkinDay,
            checkoutDay,
        });
      
        return newBooking;
    } catch (error) {
        throw error;
    }

}
const getBookingByAccountId=async (accountId)=>{
    try {
        const bookings=await Booking.findAll({
            where:{
                accountId,
            }
        });
        return bookings;     
    } catch (error) {
        throw error;
    }
   

}
module.exports={booking,getBookingByAccountId};