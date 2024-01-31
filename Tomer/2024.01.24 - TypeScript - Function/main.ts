const fn = (text: string, num: number = 1): string => {
    return text + num;
}

console.log(fn('Tomer')); // Tomer1
console.log(fn('Hello', 2)); // Hello2


console.log('-------------------');

const fn2 = (text: string, num: number = 2): string | null => {
    if (num === 1) {
        return null;
    }

    return text + num;
}

console.log(fn2('Tomer')); // Tomer2
console.log(fn2('Hello', 2)); // Hello2
console.log(fn2('Hello', 1)); // null


console.log('-------------------');

const fn3 = (text: string, num: number = 2): void => {
    console.log(text + num);
}
fn3('Tomer'); // Tomer2
fn3('Hello', 2); // Hello2
fn3('Hello', 1); // Hello1


console.log('-------------------');

let fun4: (text: string, num: number) => string;
fun4 = (text, num) => {
    return text + num;
}
console.log(fun4('Tomer', 2)); // Tomer2
console.log(fun4('Hello', 2)); // Hello2


console.log('-------------------');

let fn5 = (cb: Function) => {
    return cb();
}
const funcA = () => {
    return 'Hello';
}
console.log(fn5(funcA)); // Hello

const obj = {
    name: 'Tomer',
    age: 30,
    fn9: (text: string): string => {
        return text;
    }
}

console.log(obj.name, obj.age, obj.fn9('Hello')); // Tomer 30 Hello

const avg = (arrNumber: number[]): number => {
    let sum = 0;
    for (let i = 0; i < arrNumber.length; i++) {
        sum += arrNumber[i];
    }
    return sum / arrNumber.length;
}

// function that asks the user for a number, generates a ramdom number from 1 until the provided number and print to the console the name 'tomer' the number of times that the random number generated.
function printName(num: number): void {
    const random = Math.floor(Math.random() * num) + 1;
    for (let i = 0; i < random; i++) {
        console.log('Tomer');
    }
}

printName(10);

class Animal {
    name: string;
    color: string;
    noOfLegs: number;
    type: string;

    constructor(name: string, color: string, noOfLegs: number, type: string) {
        this.name = name;
        this.color = color;
        this.noOfLegs = noOfLegs;
        this.type = type;
    }
}

class Mammal extends Animal {
    runningSpeed: number;

    constructor(name: string, color: string, noOfLegs: number, type: string, runningSpeed: number) {
        super(name, color, noOfLegs, type);
        this.runningSpeed = runningSpeed;
    }
}

class SeaCreature extends Animal {
    canSwim: boolean;
    speedInWater: number;

    constructor(name: string, color: string, noOfLegs: number, type: string, canSwim: boolean, speedInWater: number) {
        super(name, color, noOfLegs, type);
        this.canSwim = canSwim;
        this.speedInWater = speedInWater;
    }
}

function printMultiplicationTable(num: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

printMultiplicationTable(5);
