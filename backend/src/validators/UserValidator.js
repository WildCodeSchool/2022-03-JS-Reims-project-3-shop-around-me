const DateExtension = require("@joi/date");
const JoiImport = require("joi");

const Joi = JoiImport.extend(DateExtension);

const validateUser = (req, res, next) => {
  const user = req.body;
  const isPost = req.method === "POST";
  const validationErrors = (data, forCreation) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      firstname: Joi.string().min(2).max(50).presence(presence),
      lastname: Joi.string().min(2).max(50).presence(presence),
      birthdate: Joi.date().format("YYYY-MM-DD").presence(presence),
      gender: Joi.string().min(3).max(12).presence(presence),
      city: Joi.string().min(3).max(80).presence(presence),
      zipcode: Joi.string().min(4).max(8).presence(presence),
      email: Joi.string().email().min(8).max(100).presence(presence),
      password: Joi.string().min(8).max(50).presence(presence),
    }).validate(user, { abortEarly: false }).error;
  };

  if (validationErrors(user, isPost)) {
    res.status(422).json(validationErrors(user));
  } else {
    next();
  }
};

module.exports = {
  validateUser,
};
