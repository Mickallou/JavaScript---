let usersObj;
// Model
// Fumction that retrives data (users) from server
const getUsersFromServer = () => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        //Json.parse() - convert JSON text to javascript object
        usersObj = JSON.parse(xhr.responseText);
        let usersHTML = ``;

        for (let user of usersObj) {
            usersHTML += `<tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.username}</td>
                                <td>${user.email}</td>
                                <td>${user.address.street}</td>
                                <td>${user.address.suite}</td>
                            </tr>`
        }
        document.getElementById(`myTable`).innerHTML = usersHTML;
    }

    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    xhr.send();
}

// View
// Function that creates a table from users
const createTableFromUsers = (arrUsers) => {

}

// Controller
const displayUsers = () => {
    // 1 Call the function that retrives data from server
    const arrUsers = getUsersFromServer();

    // 2. Update UI
    createTableFromUsers(arrUsers);
}

// Event 
document.getElementById(`btnLoad`).addEventListener(`click`, displayUsers);
