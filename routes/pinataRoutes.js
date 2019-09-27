var express = require('express');
var pinata = express();
var service = require('../services/pinataService');

// localhost:5000/api/pinatas [GET]
pinata.get('/api/pinatas', (req, res) => {
    service.getAllPinatas(
        (pinatas) => { return res.status(200).json(pinatas); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/pinatas [POST]
pinata.post('/api/pinatas', (req, res) => {
    service.createPinata(pinata,
        (pinata) => { return res.status(200).json(pinata); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/pinatas/{id} [GET]
pinata.get('/api/pinatas/:id', (req, res) => {
    service.getPinataById(id,
        (pinata) => { return res.status(200).json(pinata); },
        (err) => { return res.status(404).json(err); }
    );
});

// localhost:5000/api/pinatas/{id}/hit [GET]
pinata.get('/api/pinatas/:id/hit', (req, res) => {
    service.hitPinataById(id,
        () => { return res.status(200); },
        (err) => { return res.status(404).json(err); }
    );
});

module.exports = pinata;