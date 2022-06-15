const Joi = require("joi");

const validateShop = (req, res, next) => {
  const shop = req.body;
  const validationErrors = (data, forCreation = true) => {
    const presence = forCreation ? "required" : "optional";
    return Joi.object({
      name: Joi.string().min(2).max(50).presence(presence),
      brand: Joi.string().min(2).max(50).presence(presence),
      type: Joi.string().min(2).max(50),
      adress: Joi.string().min(8).max(100).presence(presence),
      opening_hours: Joi.string().min(8).max(255),
      website: Joi.string().min(2).max(100),
      email: Joi.string().email().min(8).max(100),
      phone: Joi.string().min(2).max(15),
      fb_page: Joi.string().min(10).max(255),
      insta_page: Joi.string().min(10).max(255),
      x: Joi.float().presence(presence),
      y: Joi.float().presence(presence),
    }).validate(shop, { abortEarly: false }).error;
  };

  if (validationErrors(shop)) {
    res.status(422).json(validationErrors(shop));
  } else {
    next();
  }
};

module.exports = {
  validateShop,
};
