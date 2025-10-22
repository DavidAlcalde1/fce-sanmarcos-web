require('dotenv').config();
const express = require('express');
const healthRoutes = require('./routes/health');
const noticiasRoutes = require('./routes/noticias');

const app = express();
app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api/noticias', noticiasRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});