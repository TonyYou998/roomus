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
roleRouter.get("/:id", authenticate, getRoleById);
roleRouter.post(
  "/business/create",
  authenticate,
  validateBusinessRole,
  postCreateBusinessProfile
);

module.exports = { roleRouter };
