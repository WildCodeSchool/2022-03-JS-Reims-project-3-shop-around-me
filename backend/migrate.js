require("dotenv").config();

const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  /* const fixtures = "";

  for (let j = 1; j < 10; j += 1) {
    for (let i = 1; i < 10; i += 1) {
      fixtures += `insert into affiliation (product_id, keyword_id) values (${i}, ${j});`;
    }
  }
  await connection.query(fixtures); */

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
