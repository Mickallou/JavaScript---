const xhr = new XMLHttpRequest();

xhr.onload = () => {
    const responseObj = JSON.parse(xhr.responseText);

    for (let prop in responseObj) {
        document.getElementById(`jsObj`).innerHTML += `${prop}: ${responseObj[prop]} <br>`;
    }
}
xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users/1`);
xhr.send();
