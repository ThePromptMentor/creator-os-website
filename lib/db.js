// lib/db.js
const { Pool } = require('pg');

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not set in environment');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: parseInt(process.env.PG_MAX_CLIENTS || '10', 10),
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool,
};