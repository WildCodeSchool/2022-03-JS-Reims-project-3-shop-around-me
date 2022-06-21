const AbstractManager = require("./AbstractManager");

class SpAffiliationManager extends AbstractManager {
  static table = "sp_affiliation";

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
  }

  delete(spAffiliation) {
    return this.connection.query(
      `delete from ${this.table} where shop_id = ? and product_id = ?`,
      [spAffiliation.shop_id, spAffiliation.product_id]
    );
  }

  insert(spAffiliation) {
    return this.connection.query(
      `insert into ${this.table} (shop_id, product_id) values (?, ?)`,
      [spAffiliation.shop_id, spAffiliation.product_id]
    );
  }
}

module.exports = SpAffiliationManager;
