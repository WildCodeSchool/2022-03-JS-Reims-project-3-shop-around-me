const argon2 = require("argon2");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2.hash(req.body.password, hashingOptions).then((hashedPassword) => {
    req.body.password = hashedPassword;
    next();
  });
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

module.exports = {
  hashPassword,
  verifyPassword,
};
