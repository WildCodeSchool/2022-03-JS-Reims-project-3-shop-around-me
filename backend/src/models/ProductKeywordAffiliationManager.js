const AbstractManager = require("./AbstractManager");

class ProductKeywordAffiliationManager extends AbstractManager {
  static table = "product_keyword_affiliation";

  findAll() {
    return this.connection.query(
      `select * from  ${ProductKeywordAffiliationManager.table}`
    );
  }

  delete(productId, keywordId) {
    return this.connection.query(
      `delete from ${ProductKeywordAffiliationManager.table} where product_id = ? and keyword_id = ?`,
      [productId, keywordId]
    );
  }

  insert(productKeywordAffiliation) {
    return this.connection.query(
      `insert into ${ProductKeywordAffiliationManager.table} (product_id, keyword_id) values (?, ?)`,
      [
        productKeywordAffiliation.product_id,
        productKeywordAffiliation.keyword_id,
      ]
    );
  }
}

module.exports = ProductKeywordAffiliationManager;
