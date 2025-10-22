const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/noticias – lista paginada
router.get('/', async (_req, res) => {
  try {
    const sql = 'SELECT id, titulo, contenido, imagen_url, fecha_publicacion FROM noticias ORDER BY fecha_publicacion DESC LIMIT 50';
    const { rows } = await pool.query(sql);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;