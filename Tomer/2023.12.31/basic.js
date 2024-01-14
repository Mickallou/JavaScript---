import Person from './person_models.js';
import { Student } from './person_models.js';

async function eventHandler() {
    const person1 = new Person('Tomer Sagi', 'me@tomersagi.com');
    person1.presentSelf();

    const student1 = new Student('Gal Dahan', 'me@gald.com');
    student1.presentSelf();
    student1.addGrade(88);
    student1.addGrade(99);
    student1.addGrade(93);
    student1.printGrades();
}

document.getElementById('btnStart').addEventListener('click', eventHandler);