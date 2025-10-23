// generate-hash.js
const bcrypt = require('bcryptjs');

const password = 'admin123'; // ← Esta es la contraseña que usarás
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
  if (err) throw err;
  console.log('✅ HASH LISTO PARA USAR:');
  console.log(hash);
  console.log('\nUsa este hash en tu INSERT SQL.');
});