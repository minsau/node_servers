const local = require('./data/production.json');
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.get('/users', function (req, res, next) {
  console.log('Solicitud a servidor de Producción desde ' + req.ip);
  res.json(local)
})

app.listen(3002, function () {
  console.log('Datos para simular un ambiente Producción')
})