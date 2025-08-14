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
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { email, name, source } = req.body || {};
  if (!email || typeof email !== "string") {
    return res.status(400).json({ ok: false, error: "Valid email required" });
  }

  try {
    const pool = getPool();
    const sql = `
      INSERT INTO public.leads (email, name, source)
      VALUES ($1, $2, $3)
      ON CONFLICT (email) DO UPDATE SET
        name = COALESCE(EXCLUDED.name, public.leads.name),
        source = COALESCE(EXCLUDED.source, public.leads.source)
      RETURNING id, email, created_at
    `;
    const params = [email.trim().toLowerCase(), name || null, source || "website"];
    const { rows } = await pool.query(sql, params);
    return res.status(200).json({ ok: true, lead: rows[0] });
  } catch (err) {
    console.error("join api error", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
}
