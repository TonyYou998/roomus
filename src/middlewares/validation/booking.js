const { check } = require("express-validator");

const validateBooking = [
  check("accountId").notEmpty(),
  check("serviceItemId").notEmpty(),
  check("bookingTime").notEmpty(),
  check("checkinDay").notEmpty(),
  check("checkoutDay").notEmpty(),

];

module.exports = { validateBooking };
