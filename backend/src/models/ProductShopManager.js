const AbstractManager = require("./AbstractManager");

class ProductShopManager extends AbstractManager {
  static table = "product_shop";

  findAll() {
    return this.connection.query(`select * from  ${ProductShopManager.table}`);
  }

  delete(shopId, productId) {
    return this.connection.query(
      `delete from ${ProductShopManager.table} where shop_id = ? and product_id = ?`,
      [shopId, productId]
    );
  }

  insert(productShop) {
    return this.connection.query(
      `insert into ${ProductShopManager.table} (shop_id, product_id) values (?, ?)`,
      [productShop.shop_id, productShop.product_id]
    );
  }
}

module.exports = ProductShopManager;
