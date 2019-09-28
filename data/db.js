const data = require('./data.json');
const { Candy, Offer, Pinata} = require('./schemas/entites');

const parseJsonToObjects = () => {
    const Candies = [];
    const Offers = [];
    const Pinatas = [];

    data.candies.forEach(candy => {
        Candies.push(new Candy(
            candy.id,
            candy.name,
            candy.description
        ));
    });
    data.offers.forEach(offer => {
        Offers.push(new Offer(
            offer.id,
            offer.name,
            offer.candies
        ));
    });

    data.pinatas.forEach(pinata => {
        Pinatas.push(new Pinata(
            pinata.id,
            pinata.name,
            pinata.surprise,
            pinata.maximumHits,
            0
        ));
    });

    return {
        Candies,
        Offers,
        Pinatas
    }
}

console.log(parseJsonToObjects());


module.exports = parseJsonToObjects;