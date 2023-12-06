const operators = [`+`, `-`, `/`, `*`];
const funcs = [
    () => num1 + num2,
    () => num1 - num2,
    () => num1 / num2,
    () => num1 * num2];

const calc = (num1, num2, callbackCalc) => {
    console.log(callbackCalc(num1, num2));
}

const num1 = +prompt(`please enter num1.`);
const num2 = +prompt(`please enter num2.`);
//                                     
operators.forEach((item, index) => {
    calc(num1, num2, funcs[index])
});
// funcs.forEach((item) => {
//     calc(num1, num2, item);
// })

// if (op == `+`) {
//     calc(num1, num2, () => num1 + num2);
// }

// op == `-` && calc(num1, num2, () => num1 - num2);// if

// switch (op) {
//     case `*`: calc(num1, num2, () => num1 * num2)
//     case `/`: calc(num1, num2, () => num1 / num2)
// }

// const str = prompt(`please enter string`);
// str == `hello` ? console.log(`hello`) : console.log(`not ok`);// if-else
