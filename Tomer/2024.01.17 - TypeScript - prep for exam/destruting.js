// Function defauly value
function doX(num = 10) {
    console.log(num);
}
console.log(`doX()`);
doX(); // 10
doX(20); // 20

// Object destructuring
const person = {
    firstName: 'Mickael',
    age: 30
};
console.log(`Person.`);
console.log(`My name is ${person.firstName} and I am ${person.age} years old.`)

console.log(`Destructuring.`);
const { firstName, age } = person;
console.log(`My name is ${firstName} and I am ${age} years old.`)

// Destructing - Array
const arrGrade = [100, 90, 80, 70, 60];

const [grade1, grade2, , , garde3] = arrGrade;
console.log(`grade1: ${grade1}, grade2: ${grade2} and grade3: ${garde3}`);