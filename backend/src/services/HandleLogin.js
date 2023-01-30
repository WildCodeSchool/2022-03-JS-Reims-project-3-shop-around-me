const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
require("dotenv").config();

const handleLogin = (req, res) => {
  console.warn(req.cookies);

  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something went wrong",
        user,
      });
    }
    const { password, ...userData } = user;

    req.login(userData, { session: false }, (error) => {
      if (error) {
        res.send(error);
      }
    });

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: 60 * 15,
    });
    res.cookie("shoparoundme", token, { httpOnly: true });
    return res.json({ user, token });
  })(req, res);
};

module.exports = handleLogin;
