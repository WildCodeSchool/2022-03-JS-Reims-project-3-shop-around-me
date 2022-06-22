const Joi = require("joi");

const validateKeywordProduct = (req, res, next) => {
  const keywordProduct = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      product_id: Joi.number().integer().positive().presence(presence),
      keyword_id: Joi.number().integer().positive().presence(presence),
    }).validate(keywordProduct, { abortEarly: false }).error;
  };

  if (validationErrors(keywordProduct)) {
    res.status(422).json(validationErrors(keywordProduct));
  } else {
    next();
  }
};

module.exports = {
  validateKeywordProduct,
};
