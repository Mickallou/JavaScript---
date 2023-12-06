const xhr = new XMLHttpRequest();
const usersTable = document.querySelector(`.users-table`);

function transferComplete() {
    const objResponse = JSON.parse(xhr.responseText);

    for (let i of objResponse) {
        let row = usersTable.insertRow();
        for (let a in i) {
            let cell = row.insertCell();
            let text = document.createTextNode(i[a]);
            cell.appendChild(text);
        }
    }
}
xhr.addEventListener(`load`, transferComplete)

xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
xhr.send();




