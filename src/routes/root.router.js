const express = require("express");
// const { propertyRoute } = require("./porperty.route");
// const { userRouter } = require("./user.router");
const { roleRouter } = require("./role.router");

const rootRouter = express.Router();

// rootRouter.use("/user", userRouter);
// rootRouter.use("/property", propertyRoute);
rootRouter.use("/role", roleRouter);

module.exports = { rootRouter };
