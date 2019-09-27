var express = require('express');
var candy = express();
var service = require('../services/candyService');

// localhost:5000/api/candies [GET]
candy.get('/api/candies', (req, res) => {
    service.getAllCandies(
        (artists) => { return res.status(200).json(artists); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/candies [POST]
candy.post('/api/candies', (req, res) => {
    service.createCandy(
        (artist) => { return res.status(200).json(artist); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/candies/{id} [GET]
candy.get('/api/candies/:id', (req, res) => {
    service.getCandyById(
        (artist) => { return res.status(200).json(artist); },
        (err) => { return res.status(404).json(err); }
    );
});

module.exports = candy;