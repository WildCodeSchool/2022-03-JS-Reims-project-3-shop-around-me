const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "user";

  find(id) {
    return this.connection.query(
      `select id, firstname, lastname, birthdate, gender, zipcode, city, email from ${UserManager.table} where id = ?`,
      [id]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, firstname, lastname, birthdate, gender, zipcode, city, email from ${UserManager.table}`
    );
  }

  findByEmail(email) {
    return this.connection
      .query(
        `select id, firstname, lastname, birthdate, gender, zipcode, city, email, password from ${UserManager.table} where email = ?`,
        [email]
      )
      .then(([results]) => results[0]);
  }

  insert(user) {
    return this.connection.query(
      `insert into ${UserManager.table} (firstname, lastname, birthdate, gender, zipcode, city, email, password) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.birthdate,
        user.gender,
        user.zipcode,
        user.city,
        user.email,
        user.password,
      ]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${UserManager.table} set firstname = ?, lastname = ?, birthdate = ?, gender = ?, zipcode = ?, city = ?, email = ?, password = ? where id = ?`,
      [
        user.firstname,
        user.lastname,
        user.birthdate,
        user.gender,
        user.zipcode,
        user.city,
        user.email,
        user.password,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
