const Joi = require("joi");
const { User } = require("../../models");
const checkExistedEmail = async (req, res, next) => {
  const { email } = req.body;
  const isExist = await User.findOne({
    where: {
      email,
    },
  });
  if (isExist === null) {
    next();
  } else {
    res.status(409).send("Email is already used");
  }
};
const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailSchema = await Joi.object({
    email: Joi.string().min(1).max(255).email().required(),
  }).unknown(true);
  const result = emailSchema.validate({ email });

  if (result.error) res.status(400).send("email is invalid");
  else next();
};
module.exports = { checkExistedEmail, validateEmail };
