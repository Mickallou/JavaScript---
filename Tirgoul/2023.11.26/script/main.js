const usersTable = document.querySelector(`.users-table`);
const submitBtn = document.querySelector(`#submitBtn`);

for (let user of users) {
    let row = usersTable.insertRow();

    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    };

    let cellBtn = row.insertCell();
    let newBtn = document.createElement(`div`);
    newBtn.id = (`btn5`);
    cellBtn.appendChild(newBtn);
    newBtn.style.display = `flex`;
    newBtn.style.gap = `5px`;

    let btnOne = document.createElement(`button`);
    btnOne.id = `oneBtn`
    btnOne.className = `conBtn`
    newBtn.appendChild(btnOne);

    btnOne.style.backgroundColor = `green`;
    btnOne.textContent = `Connected`;

    let btnTwo = document.createElement(`button`);
    btnTwo.id = `twoBtn`
    btnTwo.className = `conBtn`
    newBtn.appendChild(btnTwo);

    btnTwo.style.backgroundColor = `red`;
    btnTwo.textContent = `Disconneted`;

    let btnDelete = document.createElement(`button`);
    btnDelete.id = `deleteBtn`
    btnDelete.className = `conBtn`
    newBtn.appendChild(btnDelete);

    btnDelete.style.backgroundColor = `yellow`;
    btnDelete.textContent = `Delete`;

    btnOne.addEventListener('click', () => {
        user.isLogedIn = true;

        let cell = row.cells[4];
        cell.textContent = `true`
    });
    btnTwo.addEventListener('click', () => {
        user.isLogedIn = false;

        let cell = row.cells[4];
        cell.textContent = `false`
    });
    btnDelete.addEventListener('click', () => {
        usersTable.deleteRow(row.rowIndex);
    });

}


submitBtn.addEventListener(`click`, (event) => {
    event.preventDefault();
    const user = {
        fname: event.target.form[`fname`].value,
        lname: event.target.form[`lname`].value,
        email: event.target.form[`email`].value,
        password: event.target.form['password'].value,
        isLogedIn: false,
    }
    let row = usersTable.insertRow();
    for (let key in user) {
        let cell = row.insertCell();
        cell.textContent = user[key];
    }

    for (let input of event.target.form) {
        if (input.id != `submitBtn`) {
            input.value = ``;
        }
    }

    let cellBtn = row.insertCell();
    let newBtn = document.createElement(`div`);
    newBtn.id = (`btn5`);
    cellBtn.appendChild(newBtn);
    newBtn.style.display = `flex`;
    newBtn.style.gap = `5px`;

    let btnOne = document.createElement(`button`);
    btnOne.id = `oneBtn`
    btnOne.className = `conBtn`
    newBtn.appendChild(btnOne);

    btnOne.style.backgroundColor = `green`;
    btnOne.textContent = `Connected`;

    let btnTwo = document.createElement(`button`);
    btnTwo.id = `twoBtn`
    btnTwo.className = `conBtn`
    newBtn.appendChild(btnTwo);

    btnTwo.style.backgroundColor = `red`;
    btnTwo.textContent = `Disconneted`;

    let btnDelete = document.createElement(`button`);
    btnDelete.id = `deleteBtn`
    btnDelete.className = `conBtn`
    newBtn.appendChild(btnDelete);

    btnDelete.style.backgroundColor = `yellow`;
    btnDelete.textContent = `Delete`;

    btnOne.addEventListener('click', () => {
        user.isLogedIn = true;

        let cell = row.cells[4];
        cell.textContent = `true`
    });
    btnTwo.addEventListener('click', () => {
        user.isLogedIn = false;

        let cell = row.cells[4];
        cell.textContent = `false`
    });
    btnDelete.addEventListener('click', () => {
        usersTable.deleteRow(row.rowIndex);
    });
})
