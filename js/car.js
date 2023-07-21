
//OO challenge PART ONE
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "BEEP!!";
    }

    toString() {
        return `The Vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

//OO challenge PART TWO

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numberOfWheels = 4;
    }
}

//PART THREE

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numberOfWheels = 2;
    }
    revEngine() {
        return "VROOMM!!!";
    }
}

//PART FOUR

class Garage {
    constructor(capacity) {
        this.vehicle = [];
        this.capacity = capacity;
    }

    add(newVechicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only Vechicles are permited here";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we are full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle Added";
    }
}