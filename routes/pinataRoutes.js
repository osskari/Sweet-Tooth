const express = require('express')
const app = express()

// [GET] localhost:5000/api/pinatas
app.get('/api/pinatas', (req, res) => {
  res.send('GET request to the homepage');
});

// [GET] localhost:5000/api/pinatas/1
app.get('/api/pinatas/:id', (req, res) => {
  res.send('GET request to the homepage');
});

// [POST] localhost:5000/api/pinatas
app.post('/api/pinatas', function (req, res) {
  res.send('POST request to the homepage');
});

app.post('/api/pinatas/:id/hit', function (req, res) {
  res.send('POST request to the homepage');
});

module.exports = app;