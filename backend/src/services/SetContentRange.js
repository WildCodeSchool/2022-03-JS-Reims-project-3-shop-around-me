const mysql = require("mysql2/promise");

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

let length;
let rows;

const tableLength = async () => {
  [rows] = await pool.query("SELECT COUNT(*) FROM shop;");
  length = rows[0]["COUNT(*)"];
};

module.exports = (req, res, next) => {
  tableLength();
  res.header("Content-Range", `shops 0-25/${length}`);
  next();
};
