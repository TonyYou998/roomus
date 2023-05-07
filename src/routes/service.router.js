const serviceRouter = require("express").Router();

const {
  addService,
  updateServiceItem,
  deleteService,
  deleteServiceByServiceType,
  deleteServiceItem,
  addServiceItem,
  getServiceItems,
  getServiceByBusinessId,
  getServiceItemByBusinessId,
  getServices,
  addServiceType,
  searchBusinessService,
  filterService,
  getDetailServiceItemById,
  getDetailService,
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
  authorize([2]),
  validateAddService,
  addService
);
serviceRouter.delete(
  "/delete-by-servicetype/:serviceTypeId",
  authenticate,
  authorize([2]),
  deleteServiceByServiceType
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
  authorize([2]),
  validateAddServiceItem,
  addServiceItem
);
serviceRouter.patch(
  "/update-service-item/:serviceItemId",
  authenticate,
  authorize([2]),
  validateAddServiceItem,
  updateServiceItem
);
serviceRouter.delete(
  "/delete-service-item/:serviceItemId",
  authenticate,
  authorize([2]),
  deleteServiceItem
);
serviceRouter.get("/get-services", getServices);

serviceRouter.get(
  "/business/:businessId",
  authenticate,
  authorize([2]),
  getServiceByBusinessId
);
serviceRouter.get("/get-service-by-type/:serviceTypeId", filterService);
serviceRouter.get(
  "/get-detail-service-item-by-id/:id",
  getDetailServiceItemById
);
serviceRouter.get("/get-detail-service-by-id/:serviceId", getDetailService);

module.exports = { serviceRouter };
