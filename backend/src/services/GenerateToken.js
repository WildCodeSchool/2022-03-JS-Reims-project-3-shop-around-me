const jwt = require("jsonwebtoken");

const GenerateToken = (req, res) => {
  const token = jwt.sign(req.user, process.env.JWT_SECRET);
  delete req.user.password;
  res.status(200).json({ user: req.user, token });
};

module.exports = GenerateToken;
