const jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateToken = (req, res) => {
  const token = jwt.sign(JSON.stringify(req.user), process.env.JWT_SECRET);
  delete req.user.password;
  res.status(200).json({ user: req.user, token });
};

const AddTokenToBody = (req, res, next) => {
  req.user = { ...req.body };
  const { password, ...userData } = req.user;
  const token = jwt.sign(JSON.stringify(userData), process.env.JWT_SECRET);
  req.body.token = token;
  next();
};
module.exports = { GenerateToken, AddTokenToBody };
