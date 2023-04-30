const { addService, getServiceItems } = require("../controller/service.controller");
const { validateAddService } = require("../middlewares/validation/service");

const serviceRouter=require("express").Router();

serviceRouter.post("/add-service",validateAddService,addService);
serviceRouter.get("/get-service-item/:serviceId",getServiceItems);

module.exports=serviceRouter;