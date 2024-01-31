class Contact {
    private _id: number;
    private _name: string;
    private _email: string;
    private _phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }

    get id(): number { return this._id; }
    set id(id: number) { this._id = id; }
    get name(): string { return this._name; }
    set name(value: string) { this._name = value; }
    get email(): string { return this._email; }
    set email(value: string) { this._email = value; }
    get phone(): string { return this._phone; }
    set phone(value: string) { this._phone = value; }
}

const findContact = (id: number, contacts: Array<Contact>): null | string | Contact => {
    if (!contacts || contacts.length === 0) return null;

    const foundContact = contacts.find(singleContactInArray => singleContactInArray.id === id);
    if (!foundContact) return `No contact was found with this ID!`;

    return foundContact;
}

const myContact: Contact[] = [];
myContact.push(new Contact(1, 'John', 'jhon@email.com', '123'));
myContact.push(new Contact(2, 'Mickael', 'Mickael@email.com', '123'));
myContact.push(new Contact(3, 'Tomer', 'Tomer@email.com', '123'));
myContact.push(new Contact(4, 'Fiona', 'Fiona@email.com', '123'));

const a = findContact(1, []);
const b = findContact(3, myContact);
const c = findContact(5, myContact);

console.log(a);
console.log(b);
console.log(c);