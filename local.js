const local = require('./data/local.json');
const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.get('/users', function (req, res, next) {
  console.log('Solicitud a servidor Local desde ' + req.ip);
  res.json(local)
})

app.listen(3001, function () {
  console.log('Datos para simular un ambiente LOCAL')
})