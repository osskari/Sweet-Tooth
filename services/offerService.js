const repo = require('../repositories/offerRepo');

const offerService = () => {
    const getAllOffers = (cb, errorCb) => {
        repo.findAll(cb, errorCb);
    };

    return {
        getAllOffers
    }
};

module.exports = offerService();