const { Offer } = require('../data/db');

const offerService = () => {
    const getAllOffers = (cb, errorCb) => {
        Offer.find({}, (err, offers) => {
            if (err) { errorCb(err); }
            cb(offers);
        });
    };

    return {
        getAllOffers
    }
};

module.exports = offerService();