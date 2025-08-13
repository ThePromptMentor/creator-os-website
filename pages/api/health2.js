import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // ?sslmode=require should be in your URL
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  try {
    const r = await pool.query("select 1");
    res.status(200).json({
      status: "ok",
      db: true,
      rows: r.rowCount,
      commit: process.env.VERCEL_GIT_COMMIT_SHA || "local",
      tls: "rejectUnauthorized:false"
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      db: false,
      message: e.message,
      commit: process.env.VERCEL_GIT_COMMIT_SHA || "local",
      tls: "rejectUnauthorized:false"
    });
  }
}