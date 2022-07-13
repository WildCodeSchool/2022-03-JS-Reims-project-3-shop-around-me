const Joi = require("joi");

const validateShopUser = (req, res, next) => {
  const shopUser = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      shop_id: Joi.number().integer().positive().presence(presence),
      user_id: Joi.number().integer().positive().presence(presence),
    }).validate(shopUser, { abortEarly: false }).error;
  };

  if (validationErrors(shopUser)) {
    res.status(422).json(validationErrors(shopUser));
  } else {
    next();
  }
};

module.exports = {
  validateShopUser,
};
