const serviceRouter = require("express").Router();

const {
  addService,
  deleteService,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getServices,
  addServiceType,
  searchBusinessService,
  filterService,
} = require("../controller/service.controller");
const {
  validateAddService,
  validateDeleteService,
  validateAddServiceItem,
  validateAddServiceType,
} = require("../middlewares/validation/service");

const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { getServiceByServiceTypeId } = require("../services/service.service");

serviceRouter.post(
  "/add-service",
  authenticate,
  validateAddService,
  addService
);
serviceRouter.delete(
  "/delete/:serviceId",
  authenticate,
  authorize([2]),
  deleteService
);
serviceRouter.get(
  "/get-service-item/:serviceId",
  authenticate,
  getServiceItems
);
serviceRouter.get("/search", authenticate, searchBusinessService);
serviceRouter.post(
  "/add-service-type",
  authenticate,
  authorize([2]),
  validateAddServiceType,
  addServiceType
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
  authorize([2]),
  getServiceByBusinessId
);
serviceRouter.get("/get-service-by-type/:serviceTypeId",filterService);

module.exports = { serviceRouter };
