const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  findSearch(research) {
    return this.connection.query(
      `select * from  ${this.table} WHERE name LIKE ? OR brand LIKE ?`,
      [`%${research}%`, `%${research}%`]
    );
  }

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
