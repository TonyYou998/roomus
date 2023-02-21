const express=require('express');
const { addProperty } = require('../controller/property.controller');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const propertyRoute=express.Router();
propertyRoute.post("/add-property",authenticate,authorize(["Host"]),addProperty);
module.exports={propertyRoute};