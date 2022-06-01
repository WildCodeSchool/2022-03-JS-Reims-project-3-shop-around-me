const AbstractManager = require("./AbstractManager");

class KeywordManager extends AbstractManager {
  static table = "keyword";

  insert(keyword) {
    return this.connection.query(
      `insert into ${KeywordManager.table} (keyword_name) values (?)`,
      [keyword.keyword_name]
    );
  }

  update(keyword) {
    return this.connection.query(
      `update ${KeywordManager.table} set keyword_name = ? where id = ?`,
      [keyword.keyword_name, keyword.id]
    );
  }
}

module.exports = KeywordManager;
