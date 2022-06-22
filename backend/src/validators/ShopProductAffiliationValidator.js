const Joi = require("joi");

const validateShopProductAffiliation = (req, res, next) => {
  const shopProductAffiliation = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      shop_id: Joi.number().integer().positive().presence(presence),
      product_id: Joi.number().integer().positive().presence(presence),
    }).validate(shopProductAffiliation, { abortEarly: false }).error;
  };

  if (validationErrors(shopProductAffiliation)) {
    res.status(422).json(validationErrors(shopProductAffiliation));
  } else {
    next();
  }
};

module.exports = {
  validateShopProductAffiliation,
};
