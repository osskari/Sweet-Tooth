const { Pinata } = require('../data/db');

const pinataService = () => {
    const getAllPinatas = (cb, errorCb) => {
        Pinata.find({}, (err, pinatas) => {
            if (err) { errorCb(err); }
            cb(pinatas);
        });
    };

    const createPinata = (pinata, cb, errorCb) => {
        Pinata.create(pinata, (err, pinata) => {
            if (err) { errorCb(err); }
            cb(pinata);
        });
    };

    const getPinataById = (id, cb, errorCb) => {
        Pinata.findById({ _id: id }, (err, pinata) => {
            if (err) { errorCb(err); }
            cb(pinata);
        });
    };

    const hitPinata = (id, cb, errorCb) => {
        Pinata.hit({ _id: id }, (err, pinata) => {
            if (err) { errorCb(err); }
            cb(pinata);
        });
    };

    return {
        getAllPinatas,
        createPinata,
        getPinataById,
        hitPinata
    }
};

module.exports = pinataService();