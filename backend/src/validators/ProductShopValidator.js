const Joi = require("joi");

const validateProductShop = (req, res, next) => {
  const productShop = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      shop_id: Joi.number().integer().positive().presence(presence),
      product_id: Joi.number().integer().positive().presence(presence),
    }).validate(productShop, { abortEarly: false }).error;
  };

  if (validationErrors(productShop)) {
    res.status(422).json(validationErrors(productShop));
  } else {
    next();
  }
};

module.exports = {
  validateProductShop,
};
