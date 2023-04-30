const express = require("express");
const serviceRouter = require("./service.route");
// const { propertyRoute } = require("./porperty.route");
// const { userRouter } = require("./user.router");

const rootRouter = express.Router();
rootRouter.use("/service",serviceRouter);

// rootRouter.use("/user", userRouter);
// rootRouter.use("/property", propertyRoute);
module.exports = { rootRouter };
