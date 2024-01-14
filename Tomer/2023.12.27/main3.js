import BankAccount from "./bank.js";

let bankAccount1 = new BankAccount(-200);
let bankAccount2 = new BankAccount(25);
let bankAccount3 = new BankAccount(10000);

console.log(`
    Bank Account 1: ${bankAccount1.getBalance()}
    Bank Account 2: ${bankAccount2.getBalance()}
    Bank Account 3: ${bankAccount3.getBalance()}
`);

bankAccount1.setBalance(99.99);
bankAccount2.setBalance(-500);
bankAccount3.setBalance(0);

console.log(`
    Bank Account 1: ${bankAccount1.getBalance()}
    Bank Account 2: ${bankAccount2.getBalance()}
    Bank Account 3: ${bankAccount3.getBalance()}
`);

bankAccount1.credit(100);
bankAccount2.debit(500);
bankAccount3.credit(1560);

console.log(`
    Bank Account 1: ${bankAccount1.getBalance()}
    Bank Account 2: ${bankAccount2.getBalance()}
    Bank Account 3: ${bankAccount3.getBalance()}
`);

BankAccount.getRandomNumber("Bank Account 1");
BankAccount.getRandomNumber("Bank Account 2");
BankAccount.getRandomNumber("Bank Account 3");