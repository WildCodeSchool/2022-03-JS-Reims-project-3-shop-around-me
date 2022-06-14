const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  findByQuery(search) {
    return this.connection.query(
      `select distinct product_id, product.name, product.brand from ${this.table} inner join affiliation on product.id = product_id inner join keyword on keyword.id = keyword_id where keyword_name like ? or product.name LIKE ? or product.brand LIKE ?`,
      [`%${search}%`, `%${search}%`, `%${search}%`]
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
