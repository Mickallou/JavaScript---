console.log("~~~~~~~EX1~~~~~~~~~");
function ex1() {
    let arr = [1, 1, 1, 1, 1, 1, 1, 1,]
    console.log(arr.length);

    let list = document.querySelectorAll('li');
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    console.log("~~~~~~~~~~~~~~");
    for (let item of list) {
        console.log(item);
    }

}
ex1();

console.log('~~~~~~~EX2~~~~~~');
function exChangeElement() {
    let list = document.querySelectorAll('li');
    for (let items of list) {
        let num = items.innerText;
        items.innerText = Number(num) * 10;
        console.log(items);

    }
}
exChangeElement();

h1.style.color = "green";
