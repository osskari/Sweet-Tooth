const { Pinatas } = require('../data/db');
const Pinata = require('../data/schemas/pinata');
const PinataDto = require('../data/schemas/pinataDto');
const { isUrl } = require('../helpers/stringHelpers');
const fs = require("fs");
const request = require("request");

const pinataRepo = () => {
    const findAll = (cb, errorCb) => {
        if (!Pinatas){ errorCb("Database Error"); }
        let dtoList = [];
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
        let isSent = false;
        if(!Pinatas){ errorCb("Databse Error"); }
        if(id < 1 || id > Pinatas.length + 1){ errorCb("index out of bounds"); }
        Pinatas.find(pinata => {
            if(pinata.id == id){
                pinata.currentHits++;
                if(pinata.currentHits == pinata.maximumHits){
                    if (isUrl(pinata.surprise)) {
                        if(!fs.existsSync('images')) {
                            fs.mkdirSync('images')
                        }
                        const surprisetype = pinata.surprise.split('.')
                        const type = surprisetype[surprisetype.length - 1];
                        request.get(pinata.surprise).pipe(fs.createWriteStream(`images/${pinata.name}.${type}`));
                    } else {
                        fs.appendFile('surprises.txt', pinata.surprise + '\n', (err) => {
                            if (err) {throw new Error(err);}
                        });
                    }
                    cb(pinata.surprise, 200);
                    isSent = true;
                } else if(pinata.currentHits > pinata.maximumHits){
                    cb("locked", 423)
                    isSent = true;
                } else {
                    cb("", 204);
                    isSent = true;
                }

            }
        });
        if(!isSent){
            errorCb("pinata not found");
        }
    };

    return {
        findAll,
        create,
        findById,
        hitPinataById
    }
};

module.exports = pinataRepo();