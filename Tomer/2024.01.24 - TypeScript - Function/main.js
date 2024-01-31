"use strict";
const fn = (text, num = 1) => {
    return text + num;
};
console.log(fn('Tomer')); // Tomer1
console.log(fn('Hello', 2)); // Hello2
console.log('-------------------');
const fn2 = (text, num = 2) => {
    if (num === 1) {
        return null;
    }
    return text + num;
};
console.log(fn2('Tomer')); // Tomer2
console.log(fn2('Hello', 2)); // Hello2
console.log(fn2('Hello', 1)); // null
console.log('-------------------');
const fn3 = (text, num = 2) => {
    console.log(text + num);
};
fn3('Tomer'); // Tomer2
fn3('Hello', 2); // Hello2
fn3('Hello', 1); // Hello1
console.log('-------------------');
let fun4;
fun4 = (text, num) => {
    return text + num;
};
console.log(fun4('Tomer', 2)); // Tomer2
console.log(fun4('Hello', 2)); // Hello2
console.log('-------------------');
let fn5 = (cb) => {
    return cb();
};
const funcA = () => {
    return 'Hello';
};
console.log(fn5(funcA)); // Hello
const obj = {
    name: 'Tomer',
    age: 30,
    fn9: (text) => {
        return text;
    }
};
console.log(obj.name, obj.age, obj.fn9('Hello')); // Tomer 30 Hello
const avg = (arrNumber) => {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i];
    }
    return sum / arrNumber.length;
};
// function that asks the user for a number, generates a ramdom number from 1 until the provided number and print to the console the name 'tomer' the number of times that the random number generated.
function printName(num) {
    const random = Math.floor(Math.random() * num) + 1;
    for (let i = 0; i < random; i++) {
        console.log('Tomer');
    }
}
printName(10);
class Animal {
    constructor(name, color, noOfLegs, type) {
        this.name = name;
        this.color = color;
        this.noOfLegs = noOfLegs;
        this.type = type;
    }
}
class Mammal extends Animal {
    constructor(name, color, noOfLegs, type, runningSpeed) {
        super(name, color, noOfLegs, type);
        this.runningSpeed = runningSpeed;
    }
}
class SeaCreature extends Animal {
    constructor(name, color, noOfLegs, type, canSwim, speedInWater) {
        super(name, color, noOfLegs, type);
        this.canSwim = canSwim;
        this.speedInWater = speedInWater;
    }
}
function printMultiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printMultiplicationTable(5);
