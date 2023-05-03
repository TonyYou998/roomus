const serviceRouter = require("express").Router();

const { addService, addServiceItem, getServiceItems, getServiceByBusinessId, getServices, addServiceType} = require("../controller/service.controller");
const { validateAddService, validateAddServiceItem, validateAddServiceType ,} = require("../middlewares/validation/service");

const { authenticate} = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");


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


serviceRouter.post("/add-service-type",authenticate,authorize([2]),validateAddServiceType,addServiceType);

serviceRouter.post(
  "/add-service-item",
  authenticate,
  validateAddServiceItem,
  addServiceItem
);
serviceRouter.get("/get-services", authenticate, authorize([2]),getServices);
serviceRouter.get(
  "/business/:businessId",
  authenticate,authorize([2]),
  getServiceByBusinessId
);


module.exports = { serviceRouter };
