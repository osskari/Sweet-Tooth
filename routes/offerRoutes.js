const express = require('express')
const app = express()

// [GET] localhost:5000/api/offers
app.get('/api/offers', (req, res) => {
  res.send('GET request to the homepage');
});

module.exports = app;