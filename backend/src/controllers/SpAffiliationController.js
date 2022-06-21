const models = require("../models");

class SpAffiliationController {
  static browse = (req, res) => {
    models.spAffiliation
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
    const spAffiliation = req.body;

    // TODO validations (length, format...)

    models.spAffiliation
      .insert(spAffiliation)
      .then(() => {
        res.status(201).send({ ...spAffiliation });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.spAffiliation
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

module.exports = SpAffiliationController;
