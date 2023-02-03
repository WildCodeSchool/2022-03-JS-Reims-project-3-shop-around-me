const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
require("dotenv").config();

const handleLogin = (req, res) => {
  passport.authenticate("local", { session: false }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        message: "Something went wrong",
        user,
      });
    }

    const { email, firstname } = user;

    const userData = { email, firstname };

    const accessToken = jwt.sign(userData, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.cookie("accessToken", accessToken, { httpOnly: true });

    const refreshToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.sendStatus(200);
  })(req, res);
};

module.exports = handleLogin;
