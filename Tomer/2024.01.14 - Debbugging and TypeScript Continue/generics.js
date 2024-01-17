"use strict";
class Person2 {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person2 {
    constructor(name) {
        super(name);
        this.grades = [];
    }
}
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
// Generic Array
// Array using Array class
// Both following lines produce the exact same result = no difference
let myArr5 = [];
let myArr6 = []; // Same as myArr4
myArr5.push(new Student(`Micko`));
myArr6.push(new Student(`Jhon`));
let myArr7 = [];
let myArr8 = [];
let myArr9 = [];
myArr9.push(new Dog(`Apchi`, 5));
