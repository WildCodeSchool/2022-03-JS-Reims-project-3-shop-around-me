require("dotenv").config();
const passport = require("passport");
const Localstrategy = require("passport-local").Strategy;
const { verifyPassword } = require("../services/PasswordHashing");
const models = require("../models");

const authenticateUser = async (email, password, done) => {
  try {
    const user = await models.user.findByEmail(email);
    if (!user) {
      return done(null, false, { message: "Incorrect email" });
    }
    if (await verifyPassword(password, user.password)) {
      return done(null, user, { message: "Logged in successfully" });
    }
    return done(null, false, { message: "Incorrect password" });
  } catch (error) {
    return done(error);
  }
};

/** New Local Strategy */
passport.use(
  new Localstrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    authenticateUser
  )
);

/** New JWT Strategy */

module.exports = passport;
