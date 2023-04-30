const { check } = require("express-validator");
const validateAddService=[
    check("serviceName").notEmpty(),
    check("bussinessId").notEmpty(),
    check("image").notEmpty(),
    check("serviceType").notEmpty(),
    check("description").notEmpty(),
    check("address").notEmpty(),
];
module.exports={validateAddService};