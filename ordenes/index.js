const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.get('/ordenes', async (req, res) => {
  try {
    const productos = await axios.get('http://api-productos:3001/productos');
    res.json({
      ordenId: 101,
      productos: productos.data,
      estado: 'procesando'
    });
  } catch (error) {
    res.status(500).send('Error al obtener productos');
  }
});

app.listen(PORT, () => {
  console.log(`api-ordenes corriendo en puerto ${PORT}`);
});

