const models = require("../models");

class ProductShopController {
  static browse = (req, res) => {
    models.product_shop
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const productShop = req.body;

    // TODO validations (length, format...)

    models.product_shop
      .insert(productShop)
      .then(() => {
        res.status(201).send({ ...productShop });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.product_shop
      .delete(req.params.shop_id, req.params.product_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ProductShopController;
