const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (title) values (?)`,
      [product.title]
    );
  }

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set title = ? where id = ?`,
      [product.title, product.id]
    );
  }
}

module.exports = ProductManager;
