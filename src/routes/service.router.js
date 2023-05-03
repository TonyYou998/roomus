const serviceRouter = require("express").Router();

const {
  addService,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getServices,
} = require("../controller/service.controller");
const {
  validateAddService,
  validateAddServiceItem,
} = require("../middlewares/validation/service");
const { authenticate } = require("../middlewares/auth/authenticate");

serviceRouter.post(
  "/add-service",
  authenticate,
  validateAddService,
  addService
);
serviceRouter.get(
  "/get-service-item/:serviceId",
  authenticate,
  getServiceItems
);

serviceRouter.post(
  "/add-service-item",
  authenticate,
  validateAddServiceItem,
  addServiceItem
);
serviceRouter.get("/get-services", authenticate, getServices);
serviceRouter.get(
  "/business/:businessId",
  authenticate,
  getServiceByBusinessId
);

module.exports = { serviceRouter };
