enum GARAGE {
    OIL = 1,
    GAS = 2,
    ELECTRIC = 3,
    WATER = 4
}

class CarInGarage {
    make: string;
    color: string;
    garage: GARAGE;

    constructor(make: string, color: string) {
        this.make = make;
        this.color = color;
        this.garage = GARAGE.OIL;
    }

    changeStatusInGarage() {
        switch (this.garage) {
            case GARAGE.OIL:
                this.garage = GARAGE.GAS;
                break;
            case GARAGE.GAS:
                this.garage = GARAGE.ELECTRIC;
                break;
            case GARAGE.ELECTRIC:
                this.garage = GARAGE.WATER;
                break;
            case GARAGE.WATER:
                this.garage = GARAGE.OIL;
                break;
        }
    }

    print() {
        return (`Car: ${this.make}, Color: ${this.color}, Garage: ${this.garage}`);
    }
}

let car1 = new CarInGarage(`Toyota`, `Blue`);
let car2 = new CarInGarage(`Honda`, `Red`);
let car3 = new CarInGarage(`Mazda`, `Green`);

function changeStatusOfTheCar(car: CarInGarage) {
    for (let i = 0; i < 4; i++) {
        const ramdomStatus = Math.floor((Math.random() * 4) + 1);
        car.garage = ramdomStatus;
        console.log(car.print());
    }
}

changeStatusOfTheCar(car1);
changeStatusOfTheCar(car2);
changeStatusOfTheCar(car3);