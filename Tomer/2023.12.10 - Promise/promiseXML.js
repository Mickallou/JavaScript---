const myPromise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(xhr.response);
        } else {
            reject(xhr.status);
        }
    };
    xhr.send();
});

myPromise
    .then((data) => {
        const users = JSON.parse(data);
        let usersHTML = ``;
        for (let user of users) {
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
    })
    .catch((error) => {
        alert(`Error: ${error}`);
    });