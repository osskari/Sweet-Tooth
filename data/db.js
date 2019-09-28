const data = require('./data.json');
const { Candy, Offer, Pinata } = require('./schemas/entites');

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
        const candies = [];
        offer.candies.forEach(x => {
            var temp = Candies.find(c => { return c.id == x });
            candies.push(new Candy(
                temp.id,
                temp.name,
                temp.description
            ));
        });
        Offers.push(new Offer(
            offer.id,
            offer.name,
            candies
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

module.exports = parseJsonToObjects();