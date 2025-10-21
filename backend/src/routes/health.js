const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/health', async (_req, res) => {
  try {
    const t1 = Date.now();
    await pool.query('SELECT 1');
    const t2 = Date.now();
    res.json({ status: 'ok', db: 'connected', latency_ms: t2 - t1 });
  } catch (e) {
    res.status(503).json({ status: 'error', db: e.message });
  }
});

module.exports = router;