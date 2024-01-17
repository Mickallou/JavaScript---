interface IProduct {
    id: number;
    name: string;
}

class Product {
    id: number;
    name: string;
    type: number
    quantity: number;
    price: number;
    description: string;

    constructor(id: number, name: string, type: number) {
        this.id = id;
        this.name = name;
        this.type = type;

        this.quantity = 0;
        this.price = 0;
        this.description = '';
    }

}

class Car2 extends Product implements IProduct {
    year: number;

    constructor(id: number, name: string, year: number, type: number) {
        super(id, name, type);
        this.year = year;
    }
}

let theArr: Array<IProduct> = [];
theArr.push(new Car2(1, `Mazda`, 2010, 1));
theArr.push(new Car2(2, 'Toyota', 2015, 2));
theArr.push(new Car2(3, 'Honda', 2018, 3));

console.log(theArr);

function printProducts(product: Array<IProduct>) {
    const divOutput: HTMLDivElement = document.getElementById('output') as HTMLDivElement;
    for (let p of product) {
        console.log(`Id: ${p.id}, Name: ${p.name}`)
        divOutput.innerHTML += `Id: ${p.id}, Name: ${p.name}<br>`;
    }
}
printProducts(theArr);