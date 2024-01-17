"use strict";
// Literal Variable
// Tupe IS only 1 value & type
let literalNumber = 12;
let literalObject = { name: 'Tomer', age: 27 };
let regularObject = { name: 'Tomer', age: 27 };
console.log(`Literal Number: ` + literalNumber);
console.log(`Literal Object: ` + literalObject);
console.log(`Regular Object: ` + regularObject);
// literalNumber = 15; // Error
// literalObject.name = 'Tomer2';//Error
regularObject.name = 'Tomer2'; //Ok
// Any Variable (Not Recommended)
let myAge;
myAge = 27;
myAge = '27';
myAge = { name: 'Tomer', age: 27 };
myAge = [1, 2, 3];
myAge = true;
// Union Variable
let myAge2;
myAge2 = 27;
myAge2 = '27';
// Array Variable
let myArr1 = [];
myArr1[0] = 'Tomer';
myArr1.push('Tomer2');
console.log(`myArr1: ` + myArr1);
let myArr2 = ['Tomer', 'John'];
console.log(`myArr2: ` + myArr2);
// Object Variable
let myObj1 = [];
myObj1[0] = { name: 'Tomer', age: 27 };
myObj1.push({ name: 'Jhon', age: 30, isMarried: true, children: { name: 'Tomer', age: 27 } });
console.log(`myObj1: ` + myObj1);
// Array with specific class object
class Person {
    constructor(userName) {
        this.name = 'Tomer';
        this.grades = [];
        this.userName = userName;
    }
}
let myObj2 = [];
myObj2.push(new Person(`Micko`));
console.log(`myObj2: ` + myObj2);
// Generic Array
// Array using Array class
// Both following lines produce the exact same result = no difference
let myArr3 = [];
let myArr4 = []; // Same as myArr4
myArr3.push(new Person(`Micko`));
myArr4.push(new Person(`Jhon`));
// 
