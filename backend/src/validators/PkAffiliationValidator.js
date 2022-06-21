const Joi = require("joi");

const validatePkAffiliation = (req, res, next) => {
  const pkAffiliation = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      product_id: Joi.number().integer().positive().presence(presence),
      keyword_id: Joi.number().integer().positive().presence(presence),
    }).validate(pkAffiliation, { abortEarly: false }).error;
  };

  if (validationErrors(pkAffiliation)) {
    res.status(422).json(validationErrors(pkAffiliation));
  } else {
    next();
  }
};

module.exports = {
  validatePkAffiliation,
};
