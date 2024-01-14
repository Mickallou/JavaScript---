import Person from "./person.js";

function eventHandler() {
    const p1 = new Person("Tomer Sagi");

    p1.setName("joe doe");
    console.log(`My name is : ${p1.getName()}`);
    p1.toHTMLString();
}

document.querySelector("#btn").addEventListener("click", eventHandler);