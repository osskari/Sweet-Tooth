const { Offers } = require('../data/db');

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