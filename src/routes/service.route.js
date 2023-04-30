const { addService, addServiceItem, getServices, getServiceItems } = require("../controller/service.controller");
const { validateAddService, validateAddServiceItem ,} = require("../middlewares/validation/service");


const serviceRouter=require("express").Router();

serviceRouter.post("/add-service",validateAddService,addService);
serviceRouter.get("/get-service-item/:serviceId",getServiceItems);

serviceRouter.post("/add-service-item",validateAddServiceItem,addServiceItem);
serviceRouter.get("/get-services",getServices);
module.exports=serviceRouter;