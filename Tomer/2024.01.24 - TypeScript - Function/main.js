"use strict";
const fn = (text, num = 1) => {
    return text + num;
};
console.log(fn('Tomer')); // Tomer1
console.log(fn('Hello', 2)); // Hello2
console.log('-------------------');
const fn2 = (text, num = 2) => {
    if (num === 1) {
        return null;
    }
    return text + num;
};
console.log(fn2('Tomer')); // Tomer2
console.log(fn2('Hello', 2)); // Hello2
console.log(fn2('Hello', 1)); // null
console.log('-------------------');
const fn3 = (text, num = 2) => {
    console.log(text + num);
};
fn3('Tomer'); // Tomer2
fn3('Hello', 2); // Hello2
fn3('Hello', 1); // Hello1
console.log('-------------------');
let fun4;
fun4 = (text, num) => {
    return text + num;
};
console.log(fun4('Tomer', 2)); // Tomer2
console.log(fun4('Hello', 2)); // Hello2
console.log('-------------------');
let fn5 = (cb) => {
    return cb();
};
const funcA = () => {
    return 'Hello';
};
console.log(fn5(funcA)); // Hello
const obj = {
    name: 'Tomer',
    age: 30,
    fn9: (text) => {
        return text;
    }
};
console.log(obj.name, obj.age, obj.fn9('Hello')); // Tomer 30 Hello
