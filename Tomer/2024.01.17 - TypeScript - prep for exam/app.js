"use strict";
// Tuple
// Regular Array
const arr = [];
arr[0] = 'Hello';
arr[1] = 5;
console.log(`Regular Array: ${arr}`);
// Generic Array
const arrGeneric = [];
arrGeneric[0] = 'Hello';
arrGeneric[1] = 5;
console.log(`Generic Array: ${arrGeneric}`);
// Tuple
const arrTuple = ['Hello', 5];
arrTuple[0] = 'Hello';
arrTuple[1] = 16;
// arrTuple[2] = 5; // Error
console.log(`Tuple: ${arrTuple}`);
const arrTuple2 = ['Hello', 5, true, 5];
arrTuple2[0] = 'Hello';
arrTuple2[1] = 16;
arrTuple2[2] = false;
arrTuple2[3] = 5;
console.log(`Tuple: ${arrTuple2}`);
//Example: Function that returns a tuple
function getStudentGrades() {
    //Create an array of grades
    const arrGrades = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    //Calculate average
    let sum = 0;
    for (let g of arrGrades) {
        sum += g;
    }
    const avg = Math.round(sum / arrGrades.length);
    //Create a tuple of the array and the average
    const gradeTuple = [arrGrades, avg];
    //Return the tuple
    return gradeTuple;
    // const avgGrades = Number.valueOf(arrGrades.reduce((p, c) => p += c).toFixed());
}
const studentsGrades = getStudentGrades();
console.log(`Students grades: ${studentsGrades[0]},
Average grade: ${studentsGrades[1]}`);
