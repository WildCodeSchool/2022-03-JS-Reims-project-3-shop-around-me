const AbstractManager = require("./AbstractManager");
const ProductShopManager = require("./ProductShopManager");
const ProductManager = require("./ProductManager");
const KeywordProductManager = require("./KeywordProductManager");
const KeywordManager = require("./KeywordManager");

class ShopManager extends AbstractManager {
  static table = "shop";

  findByQuery(search) {
    return this.connection.query(
      `SELECT DISTINCT s.id, s.name, s.brand, s.type, s.address, s.opening_hours, s.website, s.email, s.phone, s.fb_page, s.insta_page, x, y FROM ${ShopManager.table} s
      INNER JOIN ${ProductShopManager.table} ON s.id = ${ProductShopManager.table}.shop_id 
      INNER JOIN ${ProductManager.table} ON ${ProductShopManager.table}.product_id  = ${ProductManager.table}.id 
      INNER JOIN ${KeywordProductManager.table} ON ${ProductShopManager.table}.product_id = ${KeywordProductManager.table}.product_id 
      INNER JOIN ${KeywordManager.table} ON ${KeywordProductManager.table}.keyword_id = ${KeywordManager.table}.id 
      WHERE ${KeywordManager.table}.keyword_name 
      LIKE ? OR ${ProductManager.table}.name LIKE ? 
      OR ${ProductManager.table}.brand LIKE ? 
      AND ${ProductShopManager.table}.shop_id = s.id`,
      [`%${search}%`, `%${search}%`, `%${search}%`]
    );
  }

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
