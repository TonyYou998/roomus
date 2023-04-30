const express = require("express");
// const { propertyRoute } = require("./porperty.route");
// const { userRouter } = require("./user.router");
const { serviceRouter } = require("./service.route");
const rootRouter = express.Router();

// rootRouter.use("/user", userRouter);
// rootRouter.use("/property", propertyRoute);
rootRouter.use("/service", serviceRouter);

module.exports = { rootRouter };
