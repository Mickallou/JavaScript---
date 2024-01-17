class Person2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
class Student extends Person2 {
    grades: number[];

    constructor(name: string) {
        super(name);
        this.grades = [];
    }
}

class Dog {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
// Interface is mot data holder
// Is's only an interface
interface INameable {
    name: string;
    age: number;
}

// Generic Array
// Array using Array class
// Both following lines produce the exact same result = no difference
let myArr5: Student[] = [];
let myArr6: Array<Student> = []; // Same as myArr4

myArr5.push(new Student(`Micko`));
myArr6.push(new Student(`Jhon`));

let myArr7: Array<Student> = [];
let myArr8: Array<Person2> = [];
let myArr9: Array<INameable> = [];

myArr9.push(new Dog(`Apchi`, 5));