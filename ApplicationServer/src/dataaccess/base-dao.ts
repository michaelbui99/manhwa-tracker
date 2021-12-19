const { Pool } = require("pg");
require("dotnev").config();

export function getConnection() {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DB,
    password: process.env.DB_PW,
    port: 5432,
  });
  return pool;
}
