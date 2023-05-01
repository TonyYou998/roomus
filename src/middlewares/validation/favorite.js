const { check } = require("express-validator");

const validateAddFavorite = [
  check("userId").notEmpty(),
  check("serviceId").notEmpty(),
];

module.exports = { validateAddFavorite };
