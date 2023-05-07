const { check } = require("express-validator");
const validateAddService = [
  check("serviceName").notEmpty(),
  check("bussinessId").notEmpty(),
  check("image").notEmpty(),
  check("serviceType").notEmpty(),
  check("description").notEmpty(),
  check("address").notEmpty(),
  check("price").notEmpty(),
  check("paymentMethod").notEmpty(),
];
const validateAddServiceItem = [
  check("serviceId").notEmpty(),
  check("images").notEmpty(),
  check("price").isNumeric(),
  check("description").notEmpty(),
  check("itemType").isNumeric(),
  check("serviceItemName").notEmpty(),
];
const validateAddServiceType = [check("typeName").notEmpty()];
module.exports = {
  validateAddService,
  validateAddServiceItem,
  validateAddServiceType,
};
