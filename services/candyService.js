const {Candy} = require('../data/db');

const candyService = () => {
    const getAllCandies = (cb, errorCb) => {
        Candy.find({}, (err, candies) => {
            if (err) { errorCb(err); }
            cb(candies);
        });
    };

    const createCandy = (candy, cb, errorCb) => {
        Candy.create(candy, (err, candy) => {
            if (err) { errorCb(err); }
            cb(candy);
        });
    };

    const getCandyById = (id, cb, errorCb) => {
        Candy.findById({_id:id}, (err, candy) => {
            if (err) { errorCb(err); }
            cb(candy);
        });
    };

    return {
        getAllCandies,
        createCandy,
        getCandyById
    };
};

module.exports = candyService();