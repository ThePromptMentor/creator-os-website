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
  // Accept both POST and GET to avoid 308→GET redirect issues in some clients
  if (req.method !== "POST" && req.method !== "GET") {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ ok: false, error: "DATABASE_URL not set" });
  }

  const sql = `
    CREATE TABLE IF NOT EXISTS public.leads (
      id BIGSERIAL PRIMARY KEY,
      email TEXT NOT NULL UNIQUE,
      name TEXT,
      source TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `;

  try {
    const { rowCount } = await getPool().query(sql);
    return res.status(200).json({ ok: true, createdOrVerified: true, rowCount });
  } catch (err) {
    console.error("db-setup error", err);
    return res.status(500).json({ ok: false, error: err.message || "setup failed" });
  }
}
