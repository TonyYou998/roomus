const { addService, getServices } = require("../controller/service.controller");
const { validateAddService } = require("../middlewares/validation/service");


const serviceRouter=require("express").Router();

serviceRouter.post("/add-service",validateAddService,addService);
serviceRouter.get("/get-services",getServices);
module.exports=serviceRouter;