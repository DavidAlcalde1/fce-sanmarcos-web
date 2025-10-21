const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 5,               // límite para mantenerlo ligero
  idleTimeoutMillis: 500,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;