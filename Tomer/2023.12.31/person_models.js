class Person {

    name;
    age;
    email;
    phone;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    presentSelf() {
        const str = `
        Let me introduce myself:
        Name : ${this.name}
        Email : ${this.email}
        `;

        alert(str);
    }
}

// Student inherits from Person
class Student extends Person {

    grades; // Array of grades

    constructor(name, email) {
        super(name, email);
        this.grades = [];
    }

    addGrade(intGrade) {
        this.grades.push(intGrade);
        //this.grades[this.grades.length - 1]
    }

    printGrades() {
        for (let grade of this.grades) {
            console.log(`${grade}\n`);
        }
    }
}

export default Person;
export {
    Student
};