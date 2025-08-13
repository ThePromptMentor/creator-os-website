// pages/api/health.js
import { getPool } from "../../lib/db";

export const runtime = "nodejs";

export default async function handler(req, res) {
  try {
    const pool = getPool();
    await pool.query("select 1");
    res.status(200).json({ status: "ok", db: true });
  } catch (e) {
    res.status(500).json({ status: "error", db: false, message: e.message });
  }
}
