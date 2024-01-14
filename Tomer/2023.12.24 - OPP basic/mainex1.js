class Simple_user {
    first;
    last;
    age;

    constructor(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
    }

    changeName(first, last) {
        this.first = prompt("Enter your first name");
        this.last = prompt("Enter your last name");
    }

    sayWelcome() {
        console.log(`Welcome ${this.first} ${this.last}`);
    }
}

const p1 = new Simple_user("Gal", "Lavi", 30);
const p2 = new Simple_user("Shir", "Lavi", 28);
const p3 = new Simple_user("Yossi", "Lavi", 60);


console.log(typeof p1);

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p1.sayWelcome());
console.log(p2.sayWelcome());
console.log(p3.sayWelcome());
p1.changeName();
console.log(p1);
console.log(p1.sayWelcome());