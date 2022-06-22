const models = require("../models");

class ShopProductAffiliationController {
  static browse = (req, res) => {
    models.shop_product_affiliation
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
    const shopProductAffiliation = req.body;

    // TODO validations (length, format...)

    models.shop_product_affiliation
      .insert(shopProductAffiliation)
      .then(() => {
        res.status(201).send({ ...shopProductAffiliation });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.shop_product_affiliation
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

module.exports = ShopProductAffiliationController;
