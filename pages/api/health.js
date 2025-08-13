import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  try {
    await pool.query("select 1");
    res.status(200).json({ status: "ok", db: true });
  } catch (e) {
    res.status(500).json({ status: "error", db: false, message: e.message });
  }
}