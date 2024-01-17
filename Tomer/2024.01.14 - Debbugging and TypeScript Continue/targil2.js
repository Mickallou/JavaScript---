"use strict";
class Product {
    constructor(id, name, type) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.quantity = 0;
        this.price = 0;
        this.description = '';
    }
}
class Car2 extends Product {
    constructor(id, name, year, type) {
        super(id, name, type);
        this.year = year;
    }
}
let theArr = [];
theArr.push(new Car2(1, `Mazda`, 2010, 1));
theArr.push(new Car2(2, 'Toyota', 2015, 2));
theArr.push(new Car2(3, 'Honda', 2018, 3));
console.log(theArr);
function printProducts(product) {
    const divOutput = document.getElementById('output');
    for (let p of product) {
        console.log(`Id: ${p.id}, Name: ${p.name}`);
        divOutput.innerHTML += `Id: ${p.id}, Name: ${p.name}<br>`;
    }
}
printProducts(theArr);
