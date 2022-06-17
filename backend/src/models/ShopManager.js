const AbstractManager = require("./AbstractManager");

class ShopManager extends AbstractManager {
  static table = "shop";

  insert(shop) {
    return this.connection.query(
      `insert into ${ShopManager.table} (name, brand, type, adress, opening_hours, website, email, phone, fb_page, insta_page, x, y) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        shop.name,
        shop.brand,
        shop.type,
        shop.adress,
        shop.opening_hours,
        shop.website,
        shop.email,
        shop.phone,
        shop.fb_page,
        shop.insta_page,
        shop.x,
        shop.y,
      ]
    );
  }

  update(shop) {
    return this.connection.query(
      `UPDATE ${ShopManager.table} SET ? WHERE id = ?`,
      [shop, shop.id]
    );
  }
}

module.exports = ShopManager;
