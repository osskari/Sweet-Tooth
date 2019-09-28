const repo = require('../repositories/pinataRepo');

const pinataService = () => {
    const getAllPinatas = (cb, errorCb) => {
        repo.findAll(cb, errorCb);
    };

    const createPinata = (pinata, cb, errorCb) => {
        repo.create(pinata, cb, errorCb);
    };

    const getPinataById = (id, cb, errorCb) => {
        repo.findById(id, cb, errorCb);
    };

    const hitPinataById = (id, cb, errorCb) => {
        repo.hitPinataById(id, cb, errorCb);
    };

    return {
        getAllPinatas,
        createPinata,
        getPinataById,
        hitPinataById
    }
};

module.exports = pinataService();