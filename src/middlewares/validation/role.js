const { check } = require("express-validator");

const validateAddRole = [
  check("roleName").notEmpty(),
  check("description").notEmpty(),
];

module.exports = { validateAddRole };
