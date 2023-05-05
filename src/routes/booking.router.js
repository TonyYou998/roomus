const { booking } = require("../controller/booking.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { validateBooking } = require("../middlewares/validation/booking");

const bookingRouter = require("express").Router();

bookingRouter.post("/book",authenticate,validateBooking,booking);

module.exports={bookingRouter};

