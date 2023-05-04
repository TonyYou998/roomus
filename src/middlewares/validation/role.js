const { check } = require("express-validator");

const validateAddRole = [
  check("roleName").notEmpty(),
  check("description").notEmpty(),
];

const validateBusinessRole = [
  check("fullname").notEmpty(),
  check("email").isEmail(),
  check("nameHost").notEmpty(),
  check("address").notEmpty(),
  check("description").notEmpty(),
  check("taxNumber").notEmpty(),
];

module.exports = { validateAddRole, validateBusinessRole };
