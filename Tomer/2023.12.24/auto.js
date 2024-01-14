class Car {
    make;
    model;
    static totalCars = 0;

    treatmentStatus;
    static TREATMENT_STATUS = {
        open: 1,
        inProgress: 2,
        close: 3
    }

    constructor(make, model) {
        this.make = make;
        this.model = model;
        Car.totalCars++;
        this.treatmentStatus = Car.TREATMENT_STATUS.open++;
    }

    displayDetails() {
        console.log(`Car details: `);
        console.log(this);
    }

    static displayTotalCars() {
        console.log(`Total cars: ${Car.totalCars}`);
    }

    static getTreatmentsStatus() {
        console.log(`Car.TREATMENT_STATUS: `);
        console.log(Car.TREATMENT_STATUS);
    }
}

const car1 = new Car('Honda', 'Accord');
const car2 = new Car('Toyota', 'Corolla');

car1.displayDetails();
car2.displayDetails();

Car.displayTotalCars();
Car.getTreatmentsStatus();