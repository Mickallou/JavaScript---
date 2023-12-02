const theName = prompt(`What your name ?`)

const newFun = () => {
    document.getElementById(`element`).innerHTML = (`Your name is ${theName} <br>`)
}
setTimeout(newFun, 2000);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setInterval(() => {
    document.getElementById(`element`).innerHTML += `Your name is ${theName} <br>`;
}, 500);