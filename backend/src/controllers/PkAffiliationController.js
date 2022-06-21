const models = require("../models");

class PkAffiliationController {
  static browse = (req, res) => {
    models.pkAffiliation
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
    const pkAffiliation = req.body;

    // TODO validations (length, format...)

    models.pkAffiliation
      .insert(pkAffiliation)
      .then(() => {
        res.status(201).send({ ...pkAffiliation });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.pkAffiliation
      .delete(req.params.product_id, req.params.keyword_id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = PkAffiliationController;