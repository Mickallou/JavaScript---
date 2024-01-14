//---MODEL---//
async function getData() {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(async (response) => {
            const data = await response.json();
            updateUI(data);
        })
        .catch(error => { alert(error) });
}

//---VIEW---//
function updateUI(data) {
    htmlContent = ``;
    for (let post of data) {
        htmlContent += `
        <tr>
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
        </tr>
            `;
    }

    document.getElementById("output").innerHTML = `<table>${htmlContent}</table>`;
}

//---CONTROLLER---//
async function main() {
    getData();
}

main();
