const { Role, BussinessProfile } = require("../models");
const { v4: uuidv4 } = require("uuid");

const HttpError = require("../utils/error");

const addRole = async (req) => {
  try {
    const newRole = await Role.create(req.body);
    return newRole;
  } catch (error) {
    error.status = error.status || 400;
    throw error;
  }
};

const getRoleById = async (req) => {
  try {
    const role = await Role.findOne({ id: req.params.id });
    if (!role) throw new HttpError(`Found no role with provided Id`, 400);
    return role;
  } catch (error) {
    throw error;
  }
};

const postCreateBusinessProfile = async (req) => {
  try {
    const { fullname, email, nameHost, address, description, taxNumber } =
      req.body;
    // const user = await UserAccount.findOne({ where: { id: userId } });
    req.user.update({ role: 2 });
    req.user.save();

    const businessProfile = await BussinessProfile.create({
      id: uuidv4(),
      fullname,
      email,
      nameHost,
      address,
      description,
      taxNumber,
      userId: req.user.id,
    });

    return {
      user: req.user,
      businessProfile,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { addRole, getRoleById, postCreateBusinessProfile };
