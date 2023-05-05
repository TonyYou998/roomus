const businessRouter = require("express").Router();
const {
  createBusiness,
  getBusinessByUserId,
} = require("../controller/business.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const { authorize } = require("../middlewares/auth/authorize");
const { ROLE } = require("../utils/constants/role");

const {
  validateCreateBusiness,
} = require("../middlewares/validation/business");

businessRouter.get(
  "/list",
  authenticate,
  authorize([ROLE.HOST]),
  getBusinessByUserId
);
businessRouter.post(
  "/create",
  authenticate,
  authorize([ROLE.HOST]),
  validateCreateBusiness,
  createBusiness
);

module.exports = { businessRouter };
