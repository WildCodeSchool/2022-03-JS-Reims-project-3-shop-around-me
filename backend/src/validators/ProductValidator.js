const Joi = require("joi");

const validateProduct = (req, res, next) => {
  const product = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      name: Joi.string().min(2).max(50).presence(presence),
      brand: Joi.string().min(2).max(50).presence(presence),
    }).validate(product, { abortEarly: false }).error;
  };

  if (validationErrors(product)) {
    res.status(422).json(validationErrors(product));
  } else {
    next();
  }
};

module.exports = {
  validateProduct,
};
