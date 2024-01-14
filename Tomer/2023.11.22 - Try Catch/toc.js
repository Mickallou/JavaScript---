// try {
//     // code ...
// } catch () {
//     // error handling 
// };

// Don't have a error
try {
    alert(`start`);
    let lalala = `Hello`
    alert(`end`);
} catch (err) {
    // can use 'err' variable
    alert(`An errar had occurred`)
}

// Error in the code
try {
    alert(`start`);
    lalala
    alert(`end`);
} catch (err) {
    // can use 'err' variablee
    alert(`An errar had occurred`)
}