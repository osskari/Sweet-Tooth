const { Pinatas } = require('../data/db');
const Pinata = require('../data/schemas/pinata');

const pinataRepo = () => {
    const findAll = (cb, errorCb) => {
        if (!Pinatas){ errorCb("Database Error"); }
        cb(Pinatas);
    };

    const create = (pinata, cb, errorCb) => {
        if(!Pinatas){ errorCb("Databse Error"); }
        const newPinata = new Pinata(
            Pinatas.length + 1,
            pinata.name,
            pinata.surprise,
            pinata.maximumHits,
            pinata.currentHits
        );
        Pinatas.push(newPinata);
        cb(newPinata);
    };

    const findById = (id, cb, errorCb) => {
        if(!Pinatas){ errorCb("Databse Error"); }
        if(id < 1 || id > Pinatas.length + 1){ errorCb("index out of bounds"); }
        const temp = Pinatas.find(pinata => { return pinata.id == id });
        if(!temp){ errorCb("Pinata not found"); }
        cb(temp);
    };

    const hitPinataById = (id, cb, errorCb) => {
        if(!Pinatas){ errorCb("Databse Error"); }
        if(id < 1 || id > Pinatas.length + 1){ errorCb("index out of bounds"); }
        Pinatas.find(pinata => {
            if(pinata.id == id){
                pinata.currentHits++;
                if(pinata.currentHits == pinata.maximumHits){
                    cb(pinata.surprise, 200);
                } else if(pinata.currentHits > pinata.maximumHits){
                    cb("locked", 423)
                }
                cb("", 204);
            }
            errorCb("pinata not found")
        });
    };

    return {
        findAll,
        create,
        findById,
        hitPinataById
    }
};

module.exports = pinataRepo();