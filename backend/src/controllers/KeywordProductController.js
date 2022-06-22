const models = require("../models");

class KeywordProductController {
  static browse = (req, res) => {
    models.keyword_product
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
    const keywordProduct = req.body;

    // TODO validations (length, format...)

    models.keyword_product
      .insert(keywordProduct)
      .then(() => {
        res.status(201).send({ ...keywordProduct });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.keyword_product
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

module.exports = KeywordProductController;
