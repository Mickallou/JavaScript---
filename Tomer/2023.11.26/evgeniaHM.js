const divide = (num1, num2) => { return num1 / num2 }

console.log(divide(5, 10));
console.log(divide(50, 5));
console.log(divide(15, 10));

let finalMessage = 'You are God of Math'
try {
    console.log(divide(a, b));

} catch (err) {
    console.log(err.message);

} finally {
    console.log(finalMessage);
    finalMessage = "";
}
console.log(finalMessage); 