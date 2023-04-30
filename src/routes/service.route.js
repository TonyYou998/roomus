const { addService, addServiceItem } = require("../controller/service.controller");
const { validateAddService, validateAddServiceItem } = require("../middlewares/validation/service");

const serviceRouter=require("express").Router();

serviceRouter.post("/add-service",validateAddService,addService);

serviceRouter.post("/add-service-item",validateAddServiceItem,addServiceItem);
module.exports=serviceRouter;