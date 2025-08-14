export default function handler(req, res) {
  if (!process.env.DATABASE_URL) {
    return res.status(503).json({ ok: false, error: "DATABASE_URL not set" });
  }
  return res.status(200).json({ ok: true, ts: new Date().toISOString() });
}
