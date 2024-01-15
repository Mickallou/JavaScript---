export default class Vehicle {
    startDriving(){
        setTimeout(() => {
            alert('Started Driving')
        }, 2000);
    };

    stopDriving(){
        setTimeout(() => {
            alert('Stopped Driving')
        }, 3000);
    };
};

export class Car extends Vehicle {
    startDriving(){
        super.startDriving();
    }
    stopDriving(){
        super.stopDriving();
    }
};

export class Truck extends Vehicle {};

export class ElectricCar extends Car {
    startDriving(){
        super.startDriving();
        console.log('Electric Car is Starting up');
    }
    stopDriving(){
        super.stopDriving();
        console.log('Electric Car is Stopping');
    }

};

export class PetrolCar extends Car {
    startDriving(){
        super.startDriving();
        console.log('Petrol Car is Starting up');
    }
    stopDriving(){
        super.stopDriving();
        console.log('Petrol Car is Stopping');
    }

};