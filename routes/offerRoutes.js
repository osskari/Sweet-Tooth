var express = require('express');
var offer = express();
var service = require('../services/offerService');

// localhost:5000/api/offers [GET]
offer.get('/api/offers', (req, res) => {
    service.getAllOffers(
        (offers) => { return res.status(200).json(offers); },
        (err) => { return res.status(404).json(err); }
    );
});

module.exports = offer;