const { booking, getBookingByAccountId } = require("../controller/booking.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { validateBooking } = require("../middlewares/validation/booking");

const bookingRouter = require("express").Router();

bookingRouter.post("/book",authenticate,validateBooking,booking);
bookingRouter.get("/get/:accountId",authenticate,getBookingByAccountId);

module.exports={bookingRouter};

