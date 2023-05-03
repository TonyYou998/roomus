const roleRouter = require("express").Router();

const { addRole, getRoleById } = require("../controller/role.controller");
const { validateAddRole } = require("../middlewares/validation/role");
const { authenticate } = require("../middlewares/auth/authenticate");

roleRouter.post("/", authenticate, validateAddRole, addRole);
roleRouter.get("/:id", authenticate, getRoleById);

module.exports = { roleRouter };
