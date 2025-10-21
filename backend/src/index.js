require('dotenv').config();
const express = require('express');
const healthRoutes = require('./routes/health');

const app = express();
app.use(express.json());

app.use('/api', healthRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});