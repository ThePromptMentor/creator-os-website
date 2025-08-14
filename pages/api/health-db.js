import { Pool } from "pg";

let pool;
function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
    });
  }
  return pool;
}

export default async function handler(req, res) {
  try {
    if (!process.env.DATABASE_URL) {
      return res.status(503).json({ ok: false, error: "DATABASE_URL not set" });
    }
    const client = await getPool().connect();
    try {
      const { rows } = await client.query("select 1 as ok");
      return res.status(200).json({ ok: true, rows });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("health-db error", err);
    return res.status(500).json({ ok: false, error: "DB connection failed" });
  }
}
