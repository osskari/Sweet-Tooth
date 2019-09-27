const express = require('express')
const app = express()

// [GET] localhost:5000/api/candies
app.get('/api/candies', (req, res) => {
  res.send('GET request to the homepage');
});

// [POST] localhost:5000/api/candies
app.post('/api/candies', (req, res) => {
  res.send('GET request to the homepage');
});

// [GET] localhost:5000/api/candies/1
app.get('/api/candies/:id', (req, res) => {
  res.send('GET request to the homepage');
});

module.exports = app;