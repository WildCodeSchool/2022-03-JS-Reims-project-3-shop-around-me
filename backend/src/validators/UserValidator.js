const Joi = require("joi");

const validateUser = (req, res, next) => {
  const user = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      firstname: Joi.string
        .min(2)
        .max(50)
        .presence(presence)
        .pattern(/^([ \u00c0-\u01ffa-zA-Z'-])+$/i),
      lastname: Joi.string
        .min(2)
        .max(50)
        .presence(presence)
        .pattern(/^([ \u00c0-\u01ffa-zA-Z'-])+$/i),
      birthdate: Joi.date()
        .greater("12-12-1900")
        .less("12-12-2021")
        .presence(presence)
        .pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/),
      gender: Joi.string.min(3).max(12).presence(presence),
      city: Joi.string()
        .min(3)
        .max(80)
        .pattern(/^([ \u00c0-\u01ffa-zA-Z'-])+$/i),
      zipcode: Joi.string
        .min(4)
        .max(8)
        .pattern(/^[0-9]{3,}$/),
      email: Joi.string()
        .email()
        .min(8)
        .max(100)
        .presence(presence)
        .pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}/i),
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
