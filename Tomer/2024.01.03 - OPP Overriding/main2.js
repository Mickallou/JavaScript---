import Vehicle from "./cars_modules.js";
import { Car, Truck, ElectricCar, PetrolCar } from "./cars_modules.js";

function main() {
    const honda = new Car;
    const scania = new Truck;
    const byd = new ElectricCar;
    const bmw = new PetrolCar;

    const arrCars = [honda, scania, byd, bmw]

    for(let a of arrCars) {
        a.startDriving();
        a.stopDriving();
    }
};

document.getElementById('btnStart').addEventListener('click', main);