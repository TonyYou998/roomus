const serviceRouter = require("express").Router();
const { getServiceByBusinessId } = require("../controller/service.controller");
const {
  addService,
  addServiceItem,
  getServices,
  getServiceItems,
  searchBusinessService,
} = require("../controller/service.controller");
const {
  validateAddService,
  validateAddServiceItem,
} = require("../middlewares/validation/service");

serviceRouter.get("/search", searchBusinessService);
serviceRouter.get("/get-service-item/:serviceId", getServiceItems);
serviceRouter.post("/add-service-item", validateAddServiceItem, addServiceItem);
serviceRouter.get("/get-services", getServices);
serviceRouter.get("/:businessId", getServiceByBusinessId);
serviceRouter.post("/add-service", validateAddService, addService);

module.exports = { serviceRouter };
