import { Pool } from "pg";

let _pool;

export function getPool() {
if (!_pool) {
const max = Number(process.env.PG_MAX_CLIENTS || "10");
// DB_SSL=strict for Supabase Direct (5432 + sslmode=require); otherwise relaxed for pooler.
const mode = (process.env.DB_SSL || "relaxed").toLowerCase();
const ssl = mode === "strict" ? { rejectUnauthorized: true } : { rejectUnauthorized: false };
_pool = new Pool({
connectionString: process.env.DATABASE_URL,
max,
ssl,
});
}
return _pool;
}