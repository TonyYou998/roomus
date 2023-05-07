const userRouter = require("express").Router();
const {
  register,
  login,
  deleteProfile,
  userProfile,
} = require("../controller/user.controller");
const { authenticate } = require("../middlewares/auth/authenticate");
const {
  validateSignup,
  validateLogin,
} = require("../middlewares/validation/user");

userRouter.get("/profile", authenticate, userProfile);
userRouter.post("/register", validateSignup, register);
userRouter.post("/login", validateLogin, login);
userRouter.delete("/delete/profile", deleteProfile);

module.exports = { userRouter };
