class Country {
    constructor() {
        this.olympicPlaces = new Map();
    }
    addPlace(sportName, place) {
        this.olympicPlaces.set(sportName, place);
    }
    fanfare() {
        for (let sportPlace of this.olympicPlaces.values()) {
            if (sportPlace <= 3) {
                console.log("fanfare");
            }
        }
    }
}


const poland = new Country(), slovakia = new Country();
poland.addPlace("long jump", 8,);
poland.addPlace("hammer throw", 2,);
slovakia.addPlace("long jump", 15,);
slovakia.addPlace("hammer throw", 6,);
poland.fanfare();
slovakia.fanfare();