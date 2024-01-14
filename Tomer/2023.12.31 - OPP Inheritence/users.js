class User {
    #users;

    constructor() {

    }

    async getUsers() {
        this.#users = await this.#getUsersFromServer();
        return this.#users;
    }

    setUsers(users) {
        this.#users = users;
    }

    async #getUsersFromServer() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }

    async getUsersAsHtml() {
        if (!this.#users) {
            this.#users = await this.#getUsersFromServer();
        }

        let htmlContent = `<table>`;

        htmlContent += ` 
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Phone</th>
                <th>Website</th>
            </thead>
        `;

        for (let user of this.#users) {
            htmlContent += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.phone}</td>
                <td>${user.website}</td>
            </tr>
            `;
        }

        htmlContent += `</table>`;

        return htmlContent;
    }
}

export default User;