const AbstractManager = require("./AbstractManager");

class ShopProductAffiliationManager extends AbstractManager {
  static table = "shop_product_affiliation";

  findAll() {
    return this.connection.query(
      `select * from  ${ShopProductAffiliationManager.table}`
    );
  }

  delete(shopId, productId) {
    return this.connection.query(
      `delete from ${ShopProductAffiliationManager.table} where shop_id = ? and product_id = ?`,
      [shopId, productId]
    );
  }

  insert(shopProductAffiliation) {
    return this.connection.query(
      `insert into ${ShopProductAffiliationManager.table} (shop_id, product_id) values (?, ?)`,
      [shopProductAffiliation.shop_id, shopProductAffiliation.product_id]
    );
  }
}

module.exports = ShopProductAffiliationManager;
