const AbstractManager = require("./AbstractManager");

class AffiliationManager extends AbstractManager {
  static table = "affiliation";

  findProducts(id) {
    return this.connection.query(
      `select * from  ${this.table} where product_id = ?`,
      [id]
    );
  }

  findKeywords(id) {
    return this.connection.query(
      `select * from  ${this.table} where keyword_id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  insert(affiliation) {
    return this.connection.query(
      `insert into ${AffiliationManager.table} (product_id, keyword_id) values (?, ?)`,
      [affiliation.product_id, affiliation.keyword_id]
    );
  }

  update(affiliation) {
    return this.connection.query(
      `update ${AffiliationManager.table} set product_id = ? where keyword_id = ?`,
      [affiliation.product_id, affiliation.keyword_id]
    );
  }
}

module.exports = AffiliationManager;
