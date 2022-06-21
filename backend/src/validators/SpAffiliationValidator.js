const Joi = require("joi");

const validateSpAffiliation = (req, res, next) => {
  const spAffiliation = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      shop_id: Joi.number().integer().positive().presence(presence),
      product_id: Joi.number().integer().positive().presence(presence),
    }).validate(spAffiliation, { abortEarly: false }).error;
  };

  if (validationErrors(spAffiliation)) {
    res.status(422).json(validationErrors(spAffiliation));
  } else {
    next();
  }
};

module.exports = {
  validateSpAffiliation,
};
