const xhr = new XMLHttpRequest();

xhr.onload = () => {
    document.getElementById(`output`).innerHTML = xhr.responseText;
}

xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);//Read
xhr.send();
// xhr.open(`POST`, `https://jsonplaceholder.typicode.com/users`);//Create
// xhr.open(`PUT`, `https://jsonplaceholder.typicode.com/users`);//Update
// xhr.open(`DELETE`, `https://jsonplaceholder.typicode.com/users`);//Delete
