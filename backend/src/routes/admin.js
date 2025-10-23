// src/routes/admin.js
const express = require('express');
const router = express.Router();
const { verifyToken } = require('./auth');

router.get('/dashboard', verifyToken, (req, res) => {
  res.json({ message: 'Bienvenido al panel de administración', user: req.user });
});

module.exports = router;