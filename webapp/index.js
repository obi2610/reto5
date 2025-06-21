const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  try {
    const orden = await axios.get('http://api-ordenes:3002/ordenes');
    res.send(`
      <h1>Bienvenido al Frontend</h1>
      <pre>${JSON.stringify(orden.data, null, 2)}</pre>
    `);
  } catch (error) {
    res.status(500).send('Error al obtener la orden');
  }
});

app.listen(PORT, () => {
  console.log(`webapp corriendo en puerto ${PORT}`);
});

