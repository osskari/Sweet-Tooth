const db = require('../data/db')
const Candy = require('../data/schemas/candy');

const candyRepo = () => {
    const findAll = (cb, errorCb) => {
        if (!db.Candies){ errorCb("Database error") };
        cb(db.Candies);
    };

    const create = (candy, cb, errorCb) => {
        if (!db.Candies){ errorCb("Database error") };
        const newCandy = new Candy(
            db.Candies.length + 1,
            candy.name,
            candy.description
        )
        db.Candies.push(newCandy);
        cb(newCandy);
    };

    const findById = (id, cb, errorCb) => {
        if(!db.Candies){ errorCb("Database error"); }
        if(id < 1 || id > db.Candies.length+1){ errorCb("index out of bounds"); }
        const temp = db.Candies.find(candy => { return candy.id == id });
        if(!temp){ errorCb("Candy not found"); }
        cb(temp);
    };

    return {
        findAll,
        create,
        findById
    }
};

module.exports = candyRepo();