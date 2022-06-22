const models = require("../models");

class ProductKeywordAffiliationController {
  static browse = (req, res) => {
    models.product_keyword_affiliation
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
    const productKeywordAffiliation = req.body;

    // TODO validations (length, format...)

    models.product_keyword_affiliation
      .insert(productKeywordAffiliation)
      .then(() => {
        res.status(201).send({ ...productKeywordAffiliation });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.product_keyword_affiliation
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

module.exports = ProductKeywordAffiliationController;
