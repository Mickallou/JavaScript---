const usersTable = document.querySelector('.users-table');
const submitBtn = document.querySelector('#submitBtn');
let users = [];

function updateLocalStorage() {
    localStorage.setItem('users', JSON.stringify(users));
}

function createButton(text, bgColor, clickHandler) {
    const button = document.createElement('button');
    button.className = 'conBtn';
    button.style.backgroundColor = bgColor;
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

function createUserRow(user) {
    const row = usersTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    const cellBtn = row.insertCell();
    const newBtn = document.createElement('div');
    newBtn.id = 'btn5';
    cellBtn.appendChild(newBtn);
    newBtn.style.display = 'flex';
    newBtn.style.gap = '5px';

    newBtn.appendChild(createButton('Connected', 'green', () => updateUserStatus(user, true)));
    newBtn.appendChild(createButton('Disconnected', 'red', () => updateUserStatus(user, false)));
    newBtn.appendChild(createButton('Delete', 'yellow', () => deleteUser(user)));
}

function updateUserStatus(user, isConnected) {
    user.isLogedIn = isConnected;
    const rowIndex = users.findIndex(u => u === user);
    const cell = usersTable.rows[rowIndex + 1].cells[4]; // Assuming the status is in the 5th column
    cell.textContent = String(isConnected);
    updateLocalStorage();
}

function deleteUser(user) {
    const rowIndex = users.findIndex(u => u === user);
    usersTable.deleteRow(rowIndex + 1); // Assuming the header row is present
    users.splice(rowIndex, 1);
    updateLocalStorage();
}

// Charger les utilisateurs existants depuis le localStorage
const savedUsers = JSON.parse(localStorage.getItem('users'));
if (savedUsers) {
    users = savedUsers;
    for (let user of users) {
        createUserRow(user);
    }
}

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const newUser = {
        fname: event.target.form['fname'].value,
        lname: event.target.form['lname'].value,
        email: event.target.form['email'].value,
        password: event.target.form['password'].value,
        isLogedIn: false,
    };

    users.push(newUser);
    createUserRow(newUser);
    updateLocalStorage();

    // Réinitialiser les champs du formulaire
    for (let input of event.target.form) {
        if (input.id !== 'submitBtn') {
            input.value = '';
        }
    }
});
