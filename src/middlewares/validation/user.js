const { check } = require("express-validator");

const validateSignup = [
  check("email").isEmail(),
  check("password").isStrongPassword(),
  check("username").isLength({ min: 6 }),
  check("fullname").isLength({ min: 6 }),
  check("phone").isNumeric().isLength({
    min: 6,
    max: 11,
  }),
];

const validateLogin = [
  check("username").notEmpty(),
  check("password").notEmpty(),
];

module.exports = { validateSignup, validateLogin };
