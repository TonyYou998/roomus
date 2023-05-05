const roleRouter = require("express").Router();

const {
  addRole,
  getRoleById,
  postCreateBusinessProfile,
} = require("../controller/role.controller");
const {
  validateAddRole,
  validateBusinessRole,
} = require("../middlewares/validation/role");
const { authenticate } = require("../middlewares/auth/authenticate");

roleRouter.post("/", authenticate, validateAddRole, addRole);
roleRouter.post(
  "/business/create",
  authenticate,
  validateBusinessRole,
  postCreateBusinessProfile
);
roleRouter.get("/:id", authenticate, getRoleById);


module.exports = { roleRouter };
