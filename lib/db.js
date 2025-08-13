import { Pool } from "pg";

let _pool;

export function getPool() {
if (!_pool) {
_pool = new Pool({
connectionString: process.env.DATABASE_URL,
// With Supabase Direct (5432 + sslmode=require), verification should pass.
// If you’re still on the pooler and see cert errors, temporarily use:
// ssl: { rejectUnauthorized: false },
ssl: { rejectUnauthorized: true },
});
}
return _pool;
}