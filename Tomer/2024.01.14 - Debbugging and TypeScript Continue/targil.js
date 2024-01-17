"use strict";
let myArr = [];
myArr.push('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
for (let a of myArr) {
    console.log(a);
}
let myObj = [];
myObj.push({
    name: `Mickael`,
    lastName: `Allouche`,
    age: 30,
}, {
    name: `Tomer`,
    lastName: `Sagie`,
    age: 27,
}, {
    name: `Yossi`,
    lastName: `Cohen`,
    age: 25,
}, {
    name: `Yael`,
    lastName: `Levy`,
    age: 20,
}, {
    name: `Yaniv`,
    lastName: `Tsahfaty`,
    age: 15,
});
for (let i of myObj) {
    console.log(i);
}
class Car {
    constructor(make, color) {
        this.make = make;
        this.color = color;
    }
    printHtml() {
        let theDiv = document.getElementById('output');
        if (theDiv != null) {
            theDiv.innerHTML += `<p>Make: ${this.make}, Color: ${this.color}</p>`;
        }
        else {
            alert('Div not found');
        }
    }
}
let car1 = new Car('Mazda', 'Red');
let car2 = new Car('Toyota', 'Blue');
car1.printHtml();
car2.printHtml();
