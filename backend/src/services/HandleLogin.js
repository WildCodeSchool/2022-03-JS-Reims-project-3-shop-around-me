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

    const { password: _, ...userData } = user;

    const tokenData = { email: userData.email, id: userData.id };

    const accessToken = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.cookie("accessToken", accessToken, { httpOnly: true });

    const refreshToken = jwt.sign(
      { email: tokenData.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.status(200).json({ user: userData });
  })(req, res);
};

module.exports = handleLogin;
