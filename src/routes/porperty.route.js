const express=require('express');
const { addProperty } = require('../controller/property.controller');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');
const { ROLE } = require('../utils/constants/role');
const propertyRoute=express.Router();
propertyRoute.post("/add-property",authenticate,authorize([ROLE.HOST]),addProperty);
module.exports={propertyRoute};