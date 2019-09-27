var express = require('express');
var candy = express();
var service = require('../services/candyService');

// localhost:5000/api/candies [GET]
candy.get('/api/candies', (req, res) => {
    service.getAllCandies(
        (candies) => { return res.status(200).json(candies); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/candies [POST]
candy.post('/api/candies', (req, res) => {
    service.createCandy(candy,
        (candy) => { return res.status(200).json(candy); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/candies/{id} [GET]
candy.get('/api/candies/:id', (req, res) => {
    service.getCandyById(id,
        (candy) => { return res.status(200).json(candy); },
        (err) => { return res.status(404).json(err); }
    );
});

module.exports = candy;