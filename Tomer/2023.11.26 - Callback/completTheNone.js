const multiply = (a, b) => {
    return a * b;
};
const calculate = (callback) => {
    const result = callback(5, 7);
    console.log(`The result is : ${result}`);
};
calculate(multiply);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const isEven = (number) => {
    return number;
};
const checkNumber = (callback) => {
    if (callback(8)) {
        console.log(`The number is Zougi`);
    } else {
        console.log(`The number is Yzougi`);
    }
    ;
}
checkNumber(isEven);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const sumArray = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
const calculateSum = (callback2) => {
    const numbers = [3, 7, 12, 5];
    const result = callback2(numbers);
    console.log(`The result is ${result}`);
}
calculateSum(sumArray);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const getLength = (string) => {
    return string;
};
const getStringLength = (callback) => {
    const text = `Hello world`
    const length = callback(text);
    console.log(`the reslut is ${length}`);
};
getStringLength(getLength);

console.log(`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

const divide = (num1, num2) => {
    console.log(num1 / num2);
};

const minus = (num1, num2) => {
    console.log(num1 - num2);
};

const multiplys = (num1, num2) => {
    console.log(num1 * num2);
};

const add = (num1, num2) => {
    console.log(num1 + num2);
};

const operations = {
    'divide': divide,
    'minus': minus,
    'multiply': multiplys,
    'add': add
};

const calc = (num1, num2, calcFunc) => {
    return calcFunc(num1, num2);
};

const go = () => {
    let num1 = parseFloat(prompt(`Your first number`));
    let num2 = parseFloat(prompt(`Your second number`));
    let operation = prompt(`divide, minus, multiplys, or add?`);

    if (operations[operation]) {
        calc(num1, num2, operations[operation]);
    } else {
        console.log('Invalid operation');
    }
};

go();