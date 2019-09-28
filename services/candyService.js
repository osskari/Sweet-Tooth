const repo = require('../repositories/candyRepo');

const candyService = () => {
    const getAllCandies = (cb, errorCb) => {
        repo.findAll(cb, errorCb);
    };

    const createCandy = (candy, cb, errorCb) => {
        repo.create(candy, cb, errorCb);
    };

    const getCandyById = (id, cb, errorCb) => {
        repo.findById(id, cb, errorCb);
    };

    return {
        getAllCandies,
        createCandy,
        getCandyById
    };
};

module.exports = candyService();