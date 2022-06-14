const AbstractManager = require("./AbstractManager");

class AffiliationManager extends AbstractManager {
  static table = "affiliation";

  findProducts(search) {
    return this.connection.query(
      `select * from product inner join ${this.table} on product.id = product_id inner join keyword on keyword.id = keyword_id where keyword_name like '%${search}%'`
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(productId, keywordId) {
    return this.connection.query(
      `delete from ${this.table} where product_id = ? and keyword_id = ?`,
      [productId, keywordId]
    );
  }

  insert(affiliation) {
    return this.connection.query(
      `insert into ${AffiliationManager.table} (product_id, keyword_id) values (?, ?)`,
      [affiliation.product_id, affiliation.keyword_id]
    );
  }
}

module.exports = AffiliationManager;
