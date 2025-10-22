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

// GET /api/noticias/:id – detalle de noticia
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'SELECT id, titulo, contenido, imagen_url, fecha_publicacion FROM noticias WHERE id = $1';
    const { rows } = await pool.query(sql, [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Noticia no encontrada' });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST /api/noticias – crear noticia (por ahora sin auth)
router.post('/', async (req, res) => {
  try {
    const { titulo, contenido, imagen_url } = req.body;
    if (!titulo) return res.status(400).json({ error: 'Falta título' });
    const sql = `
      INSERT INTO noticias (titulo, contenido, imagen_url)
      VALUES ($1, $2, $3)
      RETURNING id, titulo, contenido, imagen_url, fecha_publicacion
    `;
    const { rows } = await pool.query(sql, [titulo, contenido || null, imagen_url || null]);
    res.status(201).json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});


// PUT /api/noticias/:id – actualizar noticia
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, contenido, imagen_url } = req.body;
    const sql = `
      UPDATE noticias
      SET titulo = $1, contenido = $2, imagen_url = $3
      WHERE id = $4
      RETURNING id, titulo, contenido, imagen_url, fecha_publicacion
    `;
    const { rows } = await pool.query(sql, [titulo, contenido || null, imagen_url || null, id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Noticia no encontrada' });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// DELETE /api/noticias/:id – borrar noticia
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const sql = 'DELETE FROM noticias WHERE id = $1 RETURNING id';
    const { rows } = await pool.query(sql, [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Noticia no encontrada' });
    res.json({ message: 'Noticia eliminada', id: rows[0].id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;