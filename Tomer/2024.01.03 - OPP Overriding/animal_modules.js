export default class Animal {
    speak(){
        console.log('Animal speaking');
    }
}

export class Dog extends Animal {
    speak() {
        super.speak();
        console.log('Woof! Woof!');
    }
}
export class Cat extends Animal {
    speak() {
        super.speak();
        console.log('Miou! Miou!');
    }
}

export class AdoptedCat extends Cat {
    speak() {
        super.speak();
        console.log('Cheapt Miou Miou');
    }
}
export class BoughtCat extends Cat {
    speak() {
        super.speak();
        console.log('Expensive Miou Miou');
    }
}