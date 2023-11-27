const age = function (n) {
    return `My age is ${n} !`;
}
console.log(age(25));

console.log(`-------------------------------`);

function print(a_variable) {
    console.log(a_variable);
}

function print_callback(callback_f) {
    console.log(callback_f());
}
let num = 5;
print(5);

console.log(`-------------------------------`);

num = { age: 24, name: `Mickael` };
print(num);

console.log(`-------------------------------`);

num = function () {
    return `What a wonderful day!`
}
print(num);//Send a callback function to 'print' --> Call the finction LATER, at an unknown line.
print(num());//Call the function NOW!

console.log(`-------------------------------`);

print_callback(num);//Send the 'num' function as refenrence to the function 'print_callback()', so it could be invoced LATER.