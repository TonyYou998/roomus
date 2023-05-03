const { check } = require("express-validator");

const validateCreateBusiness = [
  check("fullname").notEmpty(),
  check("email").isEmail(),
  check("nameHost").notEmpty(),
  check("address").notEmpty(),
  check("description").notEmpty(),
  check("taxNumber").notEmpty(),
  check("userId").notEmpty(),
];

module.exports = { validateCreateBusiness };
