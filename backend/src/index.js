require('dotenv').config();
const express = require('express');
const healthRoutes = require('./routes/health');
const noticiasRoutes = require('./routes/noticias');
const authRoutes = require('./routes/auth');
const { verifyToken } = require('./routes/auth');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api/noticias', noticiasRoutes);
app.use('/api/auth', require('./routes/auth').router);          // <─ router de login
// app.use('/api/admin', verifyToken);  
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});