const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (name, brand, description) values (?, ?, ?)`,
      [product.name, product.brand, product.description]
    );
  }

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set name = ?, brand = ?, description = ? where id = ?`,
      [product.name, product.brand, product.description, product.id]
    );
  }
}

module.exports = ProductManager;
