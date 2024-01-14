function printRandom(theRandom) {
    const myDiv = document.getElementById('output');
    myDiv.innerHTML = Math.floor(Math.random() * theRandom);
}
function randomNum() {
    const theNum = prompt('Enter a number ...');
    printRandom(theNum);
}

export default randomNum;

// export {
//     printRandom
// }