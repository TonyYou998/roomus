const serviceRouter = require("express").Router();

const {
  addService,
  deleteService,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getServiceItemByBusinessId,
  getServices,
  addServiceType,
  searchBusinessService,
  filterService,
  getDetailServiceItemById,
} = require("../controller/service.controller");
const {
  validateAddService,
  validateAddServiceItem,
  validateAddServiceType,
} = require("../middlewares/validation/service");

const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");


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
serviceRouter.get(
  "/serviceItems/:businessId",
  authenticate,
  getServiceItemByBusinessId
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
serviceRouter.get("/get-services", getServices);

serviceRouter.get(
  "/business/:businessId",
  authenticate,
  authorize([2]),
  getServiceByBusinessId
);
serviceRouter.get("/get-service-by-type/:serviceTypeId",filterService);
serviceRouter.get("get-detail-service-item-by-id/:id",getDetailServiceItemById);

module.exports = { serviceRouter };
