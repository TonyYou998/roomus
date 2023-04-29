const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

User.prototype.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_KEY,
    {
      expiresIn: 3600 * 24,
    }
  );
  user.token = token;
  await user.save();
  return { token };
};

User.findByCredentials = async function ({ password, username } = {}) {
  try {
    if (!username || !password) {
      throw Error(`Email/ username and password are required to login!`);
    }
    let user = await User.findOne({ where: { email: username } });
    if (!user) user = await User.findOne({ where: { username: username } });
    if (!user) {
      throw Error(
        `Sorry, we can't find your account with this email/ username.`
      );
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      throw Error(`Your email/ username or password is incorrect!`);

    return user;
  } catch (error) {
    throw error;
  }
};

// Sequelize Hook
User.beforeCreate(async function (user) {
  user.password = await bcrypt.hash(user.password, 12);
});
