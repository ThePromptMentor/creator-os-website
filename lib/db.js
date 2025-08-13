import { Pool } from "pg";

let _pool;

export function getPool() {
if (!_pool) {
const max = Number(process.env.PG_MAX_CLIENTS || "10");
// With Direct connection + sslmode=require, the driver will use TLS.
// We explicitly enforce verification for cleanliness.
_pool = new Pool({
connectionString: process.env.DATABASE_URL,
max,
ssl: { rejectUnauthorized: true },
});
}
return _pool;
}

pages/api/health.js

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