import Animal from "./animal_modules.js";``
import { Dog, Cat, AdoptedCat, BoughtCat } from "./animal_modules.js"

function main() {
    const animal = new Animal;
    const archi = new Dog;
    const toy = new Cat;
    const punch = new Dog;
    const tshirt = new Cat;
    const jemma = new AdoptedCat;
    const mitzi = new BoughtCat;


    const arrAnimal = [animal, archi, toy, punch, tshirt, jemma, mitzi];

    for( let a of arrAnimal) {
        a.speak();
    }
}

document.getElementById('btnStart');addEventListener('click', main);