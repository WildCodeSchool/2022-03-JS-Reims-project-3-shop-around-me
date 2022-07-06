const AbstractManager = require("./AbstractManager");

class ShopUserManager extends AbstractManager {
  static table = "shop-user";

  findAll() {
    return this.connection.query(`select * from  ${ShopUserManager.table}`);
  }

  delete(shopId, userId) {
    return this.connection.query(
      `delete from ${ShopUserManager.table} where shop_id = ? and user_id = ?`,
      [shopId, userId]
    );
  }

  insert(shopUser) {
    return this.connection.query(
      `insert into ${ShopUserManager.table} (shop_id, user_id) values (?, ?)`,
      [shopUser.shop_id, shopUser.keyword_id]
    );
  }
}

module.exports = ShopUserManager;
