require("dotenv").config();
const Localstrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { verifyPassword } = require("../services/PasswordHashing");
const models = require("../models");

const initialize = (passport) => {
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

  const authenticateJWT = (jwtPayload, done) => {
    const user = jwtPayload;
    return done(null, user);
  };

  passport.use(new Localstrategy({ usernameField: "email" }, authenticateUser));

  passport.use(
    new JWTStrategy(
      {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      authenticateJWT
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    done(null, models.user.find(id));
  });
};

module.exports = initialize;
