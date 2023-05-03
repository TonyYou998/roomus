const serviceRouter = require("express").Router();

const { addService, addServiceItem, getServiceItems, getServiceByBusinessId, getServices, addServiceType} = require("../controller/service.controller");
const { validateAddService, validateAddServiceItem, validateAddServiceType ,} = require("../middlewares/validation/service");

serviceRouter.post("/add-service",validateAddService,addService);
serviceRouter.get("/get-service-item/:serviceId",getServiceItems);

serviceRouter.post("/add-service-item",validateAddServiceItem,addServiceItem);
serviceRouter.get("/get-services",getServices);
serviceRouter.post("/add-service-type",validateAddServiceType,addServiceType);
serviceRouter.get("/:businessId", getServiceByBusinessId);

module.exports = { serviceRouter };
