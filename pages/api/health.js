// pages/api/health.js
const db = require('../../lib/db');

export default async function handler(req, res) {
  try {
    const result = await db.query('SELECT 1 AS ok');
    if (result && result.rows && result.rows[0].ok === 1) {
      return res.status(200).json({ status: 'ok', db: true });
    }
    return res.status(500).json({ status: 'error', db: false });
  } catch (err) {
    console.error('Health check DB error:', err);
    return res.status(500).json({ status: 'error', db: false, message: err.message });
  }
}