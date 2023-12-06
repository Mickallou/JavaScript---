const xhr = new XMLHttpRequest();


xhr.onload = () => {
    const objResponse = JSON.parse(xhr.responseText);
    console.log(objResponse);
    document.getElementById(`jsObj`).innerHTML = objResponse[0].name;


    document.querySelector(`.memo`).innerHTML = xhr.responseText;
}
xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
xhr.send();

const jsonText = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
}
const jsonObj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
}
