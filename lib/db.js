import { Pool } from "pg";

// Node server runtime only; do NOT import in client components.
let _pool;

export function getPool() {
  if (!_pool) {
    // TLS on (via sslmode=require in DATABASE_URL), but skip CA verify to avoid pooler cert issues
    _pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    });
  }
  return _pool;
}