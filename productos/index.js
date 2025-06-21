const express = require('express');
const app = express();
const PORT = 3001;

app.get('/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Laptop', precio: 1200 },
    { id: 2, nombre: 'Mouse', precio: 25 }
  ]);
});

app.listen(PORT, () => {
  console.log(`api-productos corriendo en puerto ${PORT}`);
});

