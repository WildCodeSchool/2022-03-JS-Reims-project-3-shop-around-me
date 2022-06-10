const Joi = require("joi");

const validateKeyword = (req, res, next) => {
  const keyword = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      keyword_name: Joi.string().min(3).max(50).presence(presence),
    }).validate(keyword, { abortEarly: false }).error;
  };

  if (validationErrors(keyword)) {
    res.status(422).json(validationErrors(keyword));
  } else {
    next();
  }
};

module.exports = {
  validateKeyword,
};
