const userRouter = require("express").Router();
const { register, login } = require("../controller/user.controller");
const {
  validateSignup,
  validateLogin,
} = require("../middlewares/validation/user");

userRouter.post("/register", validateSignup, register);
userRouter.post("/login", validateLogin, login);

module.exports = { userRouter };
