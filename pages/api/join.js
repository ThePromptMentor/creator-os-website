import { getPool } from "../../lib/db";

export const runtime = "nodejs";

export default async function handler(req, res) {
if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
try {
const { email, name, source } = req.body || {};
if (!email || typeof email !== "string") {
return res.status(400).json({ error: "Email is required" });
}
const pool = getPool();
const { rows } = await pool.query(
insert into public.leads (email, name, source)          values (\$1, \$2, \$3)          on conflict (email) do update set            name = coalesce(excluded.name, public.leads.name),            source = coalesce(excluded.source, public.leads.source)          returning id, email, created_at,
[email.trim().toLowerCase(), name || null, source || "website"]
);
return res.status(200).json({ ok: true, lead: rows[0] });
} catch (e) {
return res.status(500).json({ ok: false, error: e.message });
}
}