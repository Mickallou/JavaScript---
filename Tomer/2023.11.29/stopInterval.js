let myInterval;

function myFunction() {
    document.getElementById(`demo`).innerHTML += `I love ChicagoBull<br>`;
}

function starTimer() {
    myInterval = setInterval(myFunction, 2000);
}

function stopTime() {
    clearInterval(myInterval);
}
function resetTime() {
    document.getElementById(`demo`).innerHTML = ``;
}

document.getElementById(`start`).addEventListener(`click`, starTimer)
document.getElementById(`stop`).addEventListener(`click`, stopTime)
document.getElementById(`reset`).addEventListener(`click`, resetTime)