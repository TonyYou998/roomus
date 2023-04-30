const roleRouter = require("express").Router();

const { addRole, getRoleById } = require("../controller/role.controller");
const { validateAddRole } = require("../middlewares/validation/role");

roleRouter.post("/", validateAddRole, addRole);
roleRouter.get("/:id", getRoleById);

module.exports = { roleRouter };
