const serviceRouter = require("express").Router();
const { getServices } = require("../controller/service.controller");

serviceRouter.get("/", getServices);

module.exports = { serviceRouter };
