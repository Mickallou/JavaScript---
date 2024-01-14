//1. function decleration
function myName(name) {
    console.log(`My name is ${name}`);
}
myName('John')

//2. function expression
const myName2 = function (name) {
    console.log(name);
}
myName2('John');

//3. Arrow function 
const myName3 = (name) => {
    console.log(name);
};
const myName4 = (name, last_name, is_number) => {
    console.log(name);
    console.log(last_name);
    console.log(is_number);
}
myName3('John');
myName4('John', 'Doe', 1557946);

//3.b Arrow finction with one parameter, does't need parenhesis
const myName5 = name => {
    console.log(name);
}

myName5('John5')

//3c. Arrow function one expression and return value
// Cannot do multi-line expression 
const myName6 = name => 'My name is ' + name;
const gg = myName6('John')
console.log(gg);

//The above is the same as
const myName7 = name => {
    return 'My name is ' + name
};
const hh = myName7('John7');
console.log(hh);