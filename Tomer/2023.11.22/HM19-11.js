//Capitalize the first letter of first name & last name of the user
function handleUserName(firstName, lastName) {
    //------------------ One line --------------------------
    const newfirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    const newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    return newfirstName + ' ' + newLastName;
}

//Ask the user to enter a first name & last name, capitalize the first letter ans alert it
function getUser() {
    const firstName = prompt('Please enter your first name.');
    const lastName = prompt('Please enter your last name.');

    const quickHandleName = (firstName, lastName) => {
        const newfirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        const newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        return newfirstName + ' ' + newLastName;

    };
    // const s = handleUserName(firstName, lastName);
    const s = quickHandleName(firstName, lastName);
    alert('Hi ' + s + ', Welcome back to the race !');
}

getUser();