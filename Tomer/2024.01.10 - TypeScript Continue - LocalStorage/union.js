"use strict";
//Simple variable
let age; //Union type
age = '34'; //string
age = 34; //number
// Complex variable
let ages = [];
ages[0] = '34';
ages[1] = 34;
// ages[2] = true;// Boolean is not allowed
// Complex variable - Object
// Declaration
// The ENTIRE array must be string[] or number[]
let agesObj;
// Assignment
agesObj = {
    counter: 4,
    ages: ['44', '55', '66']
};
agesObj.ages = [44, 55, 66];
// Every element can be either a 'string' or a 'number'
let agesObj2;
// Assignment
agesObj2 = {
    counter: 4,
    ages: ['44', 55, '66', 77]
};
// Complex variable - Class
