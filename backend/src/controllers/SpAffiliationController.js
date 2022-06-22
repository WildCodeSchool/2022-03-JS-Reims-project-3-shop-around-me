const models = require("../models");

class SpAffiliationController {
  static browse = (req, res) => {
    models.sp_affiliation
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

    models.sp_affiliation
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
    models.sp_affiliation
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
