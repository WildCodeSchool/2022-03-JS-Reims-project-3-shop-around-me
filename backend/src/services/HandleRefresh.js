const jwt = require("jsonwebtoken");
const passport = require("../config/passport");
require("dotenv").config();

const handleRefresh = (req, res) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    const { email, firstname } = user;

    const accessToken = jwt.sign({ email, firstname }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "2d",
    });

    res.cookie("accessToken", accessToken, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });

    return res.sendStatus(200);
  })(req, res);
};

module.exports = handleRefresh;
