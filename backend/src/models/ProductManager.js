const AbstractManager = require("./AbstractManager");

class ProductManager extends AbstractManager {
  static table = "product";

  findByQuery(search) {
    return this.connection.query(
      `select distinct product_id, product.name, product.brand from ${ProductManager.table} inner join keyword_product on product.id = product_id inner join keyword on keyword.id = keyword_id where keyword_name like ? or product.name LIKE ? or product.brand LIKE ?`,
      [`%${search}%`, `%${search}%`, `%${search}%`]
    );
  }

  insert(product) {
    return this.connection.query(
      `insert into ${ProductManager.table} (name, brand) values (?, ?)`,
      [product.name, product.brand]
    );
  }

  update(product) {
    return this.connection.query(
      `update ${ProductManager.table} set name = ?, brand = ? where id = ?`,
      [product.name, product.brand, product.id]
    );
  }
}

module.exports = ProductManager;
