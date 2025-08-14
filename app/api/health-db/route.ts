import { NextResponse } from "next/server";
import { Pool } from "pg";

// Force Node.js runtime (pg won't work on Edge)
export const runtime = "nodejs";

let pool: Pool | undefined;
function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.PGSSLMODE === "require" ? { rejectUnauthorized: false } : undefined,
    });
  }
  return pool;
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ ok: false, error: "DATABASE_URL not set" }, { status: 503 });
    }
    const client = await getPool().connect();
    try {
      const { rows } = await client.query("select 1 as ok");
      return NextResponse.json({ ok: true, rows });
    } finally {
      client.release();
    }
  } catch (err) {
    console.error("health-db error", err);
    return NextResponse.json({ ok: false, error: "DB connection failed" }, { status: 500 });
  }
}
