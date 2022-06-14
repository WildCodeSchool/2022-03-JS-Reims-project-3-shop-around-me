const models = require("../models");

class AffiliationController {
  static browse = (req, res) => {
    models.affiliation
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
    const affiliation = req.body;

    // TODO validations (length, format...)

    models.affiliation
      .insert(affiliation)
      .then(() => {
        res.status(201).send({ ...affiliation });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.affiliation
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

module.exports = AffiliationController;
