const { Pinatas } = require('../data/db');
const Pinata = require('../data/schemas/pinata');
const PinataDto = require('../data/schemas/pinataDto');

const pinataRepo = () => {
    const findAll = (cb, errorCb) => {
        if (!Pinatas){ errorCb("Database Error"); }
        const dtoList = [];
        Pinatas.forEach(pinata => { dtoList.push(new PinataDto(
            pinata.id,
            pinata.name,
            pinata.maximumHits,
            pinata.currentHits
        ))});
        cb(dtoList);
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
        Pinatas.find(pinata => {
            if(pinata.id == id){
               cb(new PinataDto(
                   pinata.id,
                   pinata.name,
                   pinata.maximumHits,
                   pinata.currentHits
               ));
            }
            errorCb("Pinata not found");
        });
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