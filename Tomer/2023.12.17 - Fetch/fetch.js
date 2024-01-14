//---MODEL---//
async function getData() {
    let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (response.ok) {
        return response.json();
    }
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
    const data = await getData();
    updateUI(data);
}

main();
