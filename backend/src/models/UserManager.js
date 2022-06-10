const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  find(id) {
    return this.connection.query(`select id, email from user where id = ?`, [
      id,
    ]);
  }

  findAll() {
    return this.connection.query(`select id, email from user`);
  }

  findByEmail(email) {
    return this.connection
      .query("select id, email from user where email = ?", [email])
      .then(([results]) => results[0]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (email, password) values (?, ?)`,
      [user.email, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set email = ?, password = ? where id = ?`,
      [user.email, user.password, user.id]
    );
  }
}

module.exports = UserManager;
