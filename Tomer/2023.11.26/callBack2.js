function myDisplayer(some) {
    document.getElementById(`demo`).innerHTML = some;
};
function myAlert(some) {
    alert(some)
}
function myLog(some) {
    console.log(some);
}

function myCalculator(num1, num2, printer) {
    const sum = num1 + num2;
    printer(sum)
};

myCalculator(5, 5, myDisplayer)
myCalculator(10, 52, myAlert)
myCalculator(45, 52, myLog)