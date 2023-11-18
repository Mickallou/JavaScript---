//  Element
const incrementButtonElement = document.getElementById('increment-btn');
const decrementButtonElement = document.getElementById('decrement-btn');
const counterElement = document.getElementById('counter');

//  Event
incrementButtonElement.addEventListener('click', increment)
decrementButtonElement.addEventListener('click', decrement)


//   Render
function renderCounter() {
    counterElement.innerHTML = counter;
}
//  state
let counter = 0;

//  how state can change 
//  add
function increment() {
    counter++;
    renderCounter();
}
//  to subtract
function decrement() {
    counter--;
    renderCounter();
}
