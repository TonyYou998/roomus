const jwt = require("jsonwebtoken");
const { UserAccount } = require("../../models");
const authenticate = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw new Error(`You are not authenticated!`);
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const decode = await jwt.verify(token, process.env.JWT_KEY);

    const user = await UserAccount.findOne({ where: { id: decode.id } });
    if (!user) throw new Error(`Your session has expired. Please login again`);
    req.user = user;
    req.token = token;

    next();
  } catch (error) {
    console.log(error);
    error.status = error.status || 401;
    next(error);
  }
};
module.exports = { authenticate };
