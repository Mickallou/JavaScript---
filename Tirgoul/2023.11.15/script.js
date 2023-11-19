// DOM = Document Object Model -> document 
console.log("document: ", document);

let h1 = document.getElementById('hello');

console.log("h1:", h1);
console.log("textContent:", h1.textContent);
console.log("innerText:", h1.innerText);
console.log("onClick:", h1.onclick);


// ******* function

function a() {
    return "This a returned value";
};

console.log(a());
console.log(a);

let byClass = document.getElementsByClassName('.paragraph');
let p = document.querySelector('.paragraph');
let ps = document.querySelectorAll('.paragraph');

console.log('getElementsByClassName', byClass);
console.log('querySelector', p);
console.log('querySelectorAll', ps);
