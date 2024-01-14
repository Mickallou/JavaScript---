import User from './users.js';

async function eventHandler() {
    const userObj = new User();

    const divObj = document.getElementById('output');
    divObj.innerHTML = await userObj.getUsersAsHtml();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);