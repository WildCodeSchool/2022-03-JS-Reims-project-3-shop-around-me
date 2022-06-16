const Joi = require("joi");

const validateUser = (req, res, next) => {
  const user = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      firstname: Joi.string().min(2).max(50).presence(presence),
      lastname: Joi.string().min(2).max(50).presence(presence),
      birthdate: Joi.date().presence(presence),
      gender: Joi.string().presence(presence),
      zipcode: Joi.string().min(5).max(5),
      city: Joi.string().min(3).max(80),
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
