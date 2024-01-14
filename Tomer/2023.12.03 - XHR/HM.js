const xhr = new XMLHttpRequest();
const usersTable = document.querySelector(`.users-table`);

function transferComplete() {
    const objectResponse = JSON.parse(xhr.responseText);
    console.log(objectResponse);

    for (let i of objectResponse) {
        let row = usersTable.insertRow();
        for (let a in i) {
            let cell = row.insertCell();
            let text = document.createTextNode(i[a]);
            cell.appendChild(text);
        }
    }
}
xhr.addEventListener(`load`, transferComplete)

xhr.open(`GET`, `https://dummyjson.com/users`);
xhr.send();






