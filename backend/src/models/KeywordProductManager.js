const AbstractManager = require("./AbstractManager");

class KeywordProductManager extends AbstractManager {
  static table = "keyword_product";

  findAll() {
    return this.connection.query(
      `select * from  ${KeywordProductManager.table}`
    );
  }

  delete(productId, keywordId) {
    return this.connection.query(
      `delete from ${KeywordProductManager.table} where product_id = ? and keyword_id = ?`,
      [productId, keywordId]
    );
  }

  insert(keywordProduct) {
    return this.connection.query(
      `insert into ${KeywordProductManager.table} (product_id, keyword_id) values (?, ?)`,
      [keywordProduct.product_id, keywordProduct.keyword_id]
    );
  }
}

module.exports = KeywordProductManager;
