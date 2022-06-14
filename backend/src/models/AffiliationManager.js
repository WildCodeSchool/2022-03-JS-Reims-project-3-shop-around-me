const AbstractManager = require("./AbstractManager");

class AffiliationManager extends AbstractManager {
  static table = "affiliation";

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
