const Joi = require("joi");

const validateUser = (req, res, next) => {
  const user = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      email: Joi.string().email().min(8).max(100).presence(presence),
      password: Joi.string().min(8).max(50).presence(presence),
    }).validate(user, { abortEarly: false }).error;
  };

  if (validationErrors(user)) {
    res.status(422).json(validationErrors(user));
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
