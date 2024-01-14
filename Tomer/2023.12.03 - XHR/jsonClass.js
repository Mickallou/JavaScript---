const xhr = new XMLHttpRequest();

xhr.onload = () => {
    const responseObj = JSON.parse(xhr.responseText);

    for (let prop in responseObj) {
        document.getElementById(`jsObj`).innerHTML += `${prop}: ${responseObj[prop]} <br>`;
    }
}
xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users/1`);
xhr.send();

// Path: Tomer/2023.12.03/jsonClass.js  
const xhr2 = new XMLHttpRequest();

xhr2.onload = () => {
    const responseObj = JSON.parse(xhr2.responseText);

    for (let prop in responseObj) {
        document.getElementById(`jsObj2`).innerHTML += `${prop}: ${responseObj[prop]} <br>`;
    }
}
xhr2.open(`GET`, `https://jsonplaceholder.typicode.com/users/2`);
xhr2.send();

// Path: Tomer/2023.12.03/jsonClass.js