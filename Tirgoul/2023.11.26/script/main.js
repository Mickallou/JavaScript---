const usersTable = document.querySelector(`.users-table`);
const submitBtn = document.querySelector(`#submitBtn`);

for (let user of users) {
    let row = usersTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        let text = document.createTextNode(user[key]);
        cell.appendChild(text);
    }
}