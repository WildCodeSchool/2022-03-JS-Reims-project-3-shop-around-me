require("dotenv").config();
const passport = require("passport");
const Localstrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const { verifyPassword } = require("../services/PasswordHashing");
const models = require("../models");

const cookieExtractor = (req) => {
  let jwt;

  if (req && req.cookies) jwt = req.cookies.refreshToken;

  return jwt;
};

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

const authenticateJWT = async (payload, done) => {
  if (!payload) return done(null, false, { message: "No token found" });

  const { email } = payload;

  try {
    const user = await models.user.findByEmail(email);
    if (!user) {
      return done(null, false, { message: "Invalid Token" });
    }
    return done(null, user, { message: "Token is valid" });
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
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: process.env.JWT_SECRET,
    },
    authenticateJWT
  )
);

module.exports = passport;
