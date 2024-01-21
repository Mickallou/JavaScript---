"use strict";
// Basic function expression typescript
const fn = () => {
    console.log(`hello`);
};
fn();
// Implicity define a function + return type
const fn2 = (text, num) => {
    return `this is a beautiful world ${text} ${num}`;
};
const str = fn2(`Mickael`, 8);
console.log(str);
// Optional arguments
const fn3 = (text, num) => {
    if (num)
        return `Hi ${text}, your lucky number is ${num}`;
    return `Hi ${text}`;
};
const str2 = fn3(`Mickael`); // The else
console.log(str2);
const str3 = fn3(`Mickael`, 8); // The if
console.log(str3);
// Default arguments values
const fn4 = (text, num = 23) => {
    return `Hi ${text}, your lucky number is ${num}`;
};
const str4 = fn4(`Mickael`);
console.log(str4);
const str5 = fn4(`Mickael`, 8);
console.log(str5);
