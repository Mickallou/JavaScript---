// Tuple

// Regular Array
const arr: (string | number)[] = [];
arr[0] = 'Hello';
arr[1] = 5;
console.log(`Regular Array: ${arr}`);

// Generic Array
const arrGeneric: Array<string | number> = [];
arrGeneric[0] = 'Hello';
arrGeneric[1] = 5;
console.log(`Generic Array: ${arrGeneric}`);

// Tuple
const arrTuple: [string, number] = ['Hello', 5];
arrTuple[0] = 'Hello';
arrTuple[1] = 16;
// arrTuple[2] = 5; // Error
console.log(`Tuple: ${arrTuple}`);


const arrTuple2: [string, number, boolean, number] = ['Hello', 5, true, 5];
arrTuple2[0] = 'Hello';
arrTuple2[1] = 16;
arrTuple2[2] = false;
arrTuple2[3] = 5;
console.log(`Tuple: ${arrTuple2}`);

//Example: Function that returns a tuple
function getStudentGrades(): [number[], number] {
    //Create an array of grades
    const arrGrades: Array<number> = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

    //Calculate average
    let sum: number = 0;
    for (let g of arrGrades) {
        sum += g;
    }
    const avg = Math.round(sum / arrGrades.length);

    //Create a tuple of the array and the average
    const gradeTuple: [number[], number] = [arrGrades, avg];

    //Return the tuple
    return gradeTuple;
    // const avgGrades = Number.valueOf(arrGrades.reduce((p, c) => p += c).toFixed());
}

const studentsGrades = getStudentGrades();
console.log(`Students grades: ${studentsGrades[0]},
Average grade: ${studentsGrades[1]}`);
