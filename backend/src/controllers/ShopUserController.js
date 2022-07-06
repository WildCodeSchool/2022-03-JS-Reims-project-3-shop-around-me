const models = require("../models");

class ShopUserController {
  static browse = (req, res) => {
    models.shop_user
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
    const shopUser = req.body;

    // TODO validations (length, format...)

    models.shop_user
      .insert(shopUser)
      .then(() => {
        res.status(201).send({ ...shopUser });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.shop_user
      .delete(req.params.shop_id, req.params.user_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ShopUserController;
