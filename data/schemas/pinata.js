function Pinata (id, name, surprise, maximumHits, currentHits) {
    this.id = id;
    this.name = name;
    this.surprise = surprise;
    this.maximumHits = maximumHits;
    this.currentHits = currentHits;
}

module.exports = Pinata;