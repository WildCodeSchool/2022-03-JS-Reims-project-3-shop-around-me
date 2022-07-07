const AbstractManager = require("./AbstractManager");

class ShopUserManager extends AbstractManager {
  static table = "shop_user";

  findAll() {
    return this.connection.query(`select * from  ${ShopUserManager.table}`);
  }

  findByUserId(userId) {
    return this.connection.query(
      `select distinct shop_id, shop.name, shop.img_url from shop inner join shop_user on shop.id = shop_id inner join user on user.id = user_id where user_id = ?`,
      [userId]
    );
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
      [shopUser.shop_id, shopUser.user_id]
    );
  }
}

module.exports = ShopUserManager;
