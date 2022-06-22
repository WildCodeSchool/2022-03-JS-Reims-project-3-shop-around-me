const Joi = require("joi");

const validateProductKeywordAffiliation = (req, res, next) => {
  const productKeywordAffiliation = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      product_id: Joi.number().integer().positive().presence(presence),
      keyword_id: Joi.number().integer().positive().presence(presence),
    }).validate(productKeywordAffiliation, { abortEarly: false }).error;
  };

  if (validationErrors(productKeywordAffiliation)) {
    res.status(422).json(validationErrors(productKeywordAffiliation));
  } else {
    next();
  }
};

module.exports = {
  validateProductKeywordAffiliation,
};
