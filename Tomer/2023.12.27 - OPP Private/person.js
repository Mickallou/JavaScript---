class Person {
    #name;
    #age;

    constructor(name) {
        this.#name = name;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }

    print() {
        console.log(this);
    }

    toHTMLString() {
        let objString = ``;

        for (let key in this) {
            objString += `<p>${key}: ${this[key]}</p><br>`;
        }

        return objString;
    }

}

export default Person;