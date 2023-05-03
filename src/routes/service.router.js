const serviceRouter = require("express").Router();

const { addService, addServiceItem, getServiceItems, getServiceByBusinessId, getServices} = require("../controller/service.controller");
const { validateAddService, validateAddServiceItem ,} = require("../middlewares/validation/service");

serviceRouter.post("/add-service",validateAddService,addService);
serviceRouter.get("/get-service-item/:serviceId",getServiceItems);

serviceRouter.post("/add-service-item",validateAddServiceItem,addServiceItem);
serviceRouter.get("/get-services",getServices);
serviceRouter.get("/:businessId", getServiceByBusinessId);

module.exports = { serviceRouter };
