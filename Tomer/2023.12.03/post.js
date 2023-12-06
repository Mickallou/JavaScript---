function createNewPost() {
    const xhr = new XMLHttpRequest();

    const jsonData = JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    });

    xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");

    xhr.send(jsonData);
    document.getElementById(`jsObj`).innerHTML = `${jsonData}`
}
createNewPost();