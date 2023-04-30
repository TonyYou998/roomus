const express = require("express");
// const { propertyRoute } = require("./porperty.route");
// const { userRouter } = require("./user.router");
const { serviceRouter } = require("./service.router");


const { roleRouter } = require("./role.router");
const { userRouter } = require("./user.router");

const rootRouter = express.Router();
rootRouter.use("/service",serviceRouter);

rootRouter.use("/user", userRouter);

rootRouter.use("/role", roleRouter);


rootRouter.use("/service", serviceRouter);

module.exports = { rootRouter };
