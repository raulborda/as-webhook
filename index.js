const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Ruta para recibir el webhook
app.post('/webhook', (req, res) => {
  // Procesar los datos recibidos en el webhook
  const data = req.body;
  console.log('Datos recibidos:', data);

  // manda Status OK para indicar que recibió correctamente

  res.sendStatus(200); 
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
