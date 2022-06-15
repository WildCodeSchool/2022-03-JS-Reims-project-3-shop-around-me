const Joi = require("joi");

const validateAffiliation = (req, res, next) => {
  const affiliation = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      product_id: Joi.number().integer().positive().presence(presence),
      keyword_id: Joi.number().integer().positive().presence(presence),
    }).validate(affiliation, { abortEarly: false }).error;
  };

  if (validationErrors(affiliation)) {
    res.status(422).json(validationErrors(affiliation));
  } else {
    next();
  }
};

module.exports = {
  validateAffiliation,
};
