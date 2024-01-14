const arr1 = [4, 5, 6];
const arr2 = [1, 2, 3, ...arr1];
const arr3 = [1, 2, 3, arr1];

console.log(arr2);// (6) [1, 2, 3, 4, 5, 6]
console.log(arr3);// (4) [1, 2, 3, Array(3)]

const arr4 = [11, 22, 33, 44, 55];
function print(num1, num2, ...myArr) { // Rest Paramter 
    console.log(num1);
    console.log(num2);
    console.log(myArr);
};

// Invoce function with individual arguments (without determining the amout of arguments)
print(10, 44)
print(10, 44, 88, 44, 66)
print(10, 44, 55, 66, 77, 88)
// Invoce function with array
print(10, 12, arr4);// Creates a nested array inside the rest parameter

// Common Example
function display(...studentName) {
    console.log(studentName);
}
const studentName = ['John', 'Jane', 'Jack', 'Jill'];
const studentNameObj = {
    name1: 'John',
    name2: 'Jane',
    name3: 'Jack',
    name4: 'Jill'
}
display(studentName)// (1) [Array(3)]
display(studentNameObj)// (1) [{…}]
display('john', 'jane')// (2) ['john', 'jane']

console.log("~~~~OBJ~~~~~");

const person = {
    name: 'John',
    age: 25,
    city: 'New York'
};

//sread operator, creats a copy of the original a completely now instance
//with completely new properties and value
// Copie met mes pas relier ne prend pas c'est changement 
const person2 = { ...person };

person.name = 'Jane';
person2.age = 50;

console.log(person);
console.log(person2);