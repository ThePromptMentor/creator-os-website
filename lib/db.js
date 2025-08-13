// lib/db.js
import { Pool } from "pg";

let _pool;

export function getPool() {
  if (!_pool) {
    const max = Number(process.env.PG_MAX_CLIENTS || "10");
    const enableSsl = (process.env.DB_SSL || "true").toLowerCase() !== "false";
    _pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      max,
      ssl: enableSsl ? { rejectUnauthorized: false } : false,
    });
  }
  return _pool;
}
