require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const settings = {
  PORT: process.env.PORT || 3000,
};

const ESTUDIANTES = [
  {
    nombre: "Erick Agrazal",
    edad: 29,
  },
  {
    nombre: "Jusselly Moreno",
    edad: 26,
  }
]

// Intermediarios
app.use(bodyParser.json());

// Controladores
app.get('/api/estudiantes/', function (req, res) {
  res.json({
    cantidad: ESTUDIANTES.length,
    estudiantes: ESTUDIANTES
  });
});

app.get('/api/estudiantes/:id', function (req, res) {
  res.json(ESTUDIANTES[req.params.id]);
});

app.post('/api/estudiantes/', function (req, res) {
  ESTUDIANTES.push(req.body);
  res.json(req.body);
});

app.listen(settings.PORT, () => {
  console.log(`El servidor está ejecutando en el puerto ${settings.PORT}`);
});