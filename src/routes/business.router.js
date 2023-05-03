const businessRouter = require("express").Router();
const { createBusiness } = require("../controller/business.controller");
const {
  validateCreateBusiness,
} = require("../middlewares/validation/business");

businessRouter.post("/create", validateCreateBusiness, createBusiness);

module.exports = { businessRouter };
