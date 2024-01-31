"use strict";
class Contact {
    constructor(id, name, email, phone) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._phone = phone;
    }
    get id() { return this._id; }
    set id(id) { this._id = id; }
    get name() { return this._name; }
    set name(value) { this._name = value; }
    get email() { return this._email; }
    set email(value) { this._email = value; }
    get phone() { return this._phone; }
    set phone(value) { this._phone = value; }
}
const findContact = (id, contacts) => {
    if (!contacts || contacts.length === 0)
        return null;
    const foundContact = contacts.find(singleContactInArray => singleContactInArray.id === id);
    if (!foundContact)
        return `No contact was found with this ID!`;
    return foundContact;
};
const myContact = [];
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
