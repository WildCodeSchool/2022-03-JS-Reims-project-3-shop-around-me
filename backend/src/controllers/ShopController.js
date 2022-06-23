const models = require("../models");

class ShopController {
  static browse = (req, res) => {
    if (req.query.search != null) {
      models.shop
        .findByQuery(req.query.search)
        .then(([rows]) => {
          res.send(rows);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    } else {
      models.shop
        .findAll()
        .then(([rows]) => {
          res.send(rows);
        })
        .catch((err) => {
          console.error(err);
          res.sendStatus(500);
        });
    }
  };

  static read = (req, res) => {
    models.shop
      .find(req.params.id)
      .then(([rows]) => {
        if (rows[0] == null) {
          res.sendStatus(404);
        } else {
          res.send(rows[0]);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static edit = (req, res) => {
    const shop = req.body;

    // TODO validations (length, format...)

    shop.id = parseInt(req.params.id, 10);

    models.shop
      .update(shop)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(204);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static add = (req, res) => {
    const shop = req.body;

    // TODO validations (length, format...)

    models.shop
      .insert(shop)
      .then(([result]) => {
        res.status(201).send({ ...shop, id: result.insertId });
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static delete = (req, res) => {
    models.shop
      .delete(req.params.id)
      .then(() => {
        res.sendStatus(204);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = ShopController;
