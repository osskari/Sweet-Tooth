const { Offers, Candies } = require('../data/db');
const Candy = require('../data/schemas/candy');

const offerRepo = () => {
    const findAll = (cb, errorCb) => {
        if (!Offers){ errorCb("Database Error"); }
        cb(Offers);
    };

    return {
        findAll
    }
}

module.exports = offerRepo();