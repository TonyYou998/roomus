const serviceRouter = require("express").Router();
const { getServiceByBusinessId } = require("../controller/service.controller");

serviceRouter.get("/:businessId", getServiceByBusinessId);

module.exports = { serviceRouter };
