class BankAccount {
    #balance;
    static RANDOM_NUMBER = Math.floor(Math.random() * 1000)


    constructor(balance) {
        this.#balance = balance;
    }

    setBalance(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    credit(amount) {
        this.#balance += amount;
    }

    debit(amount) {
        this.#balance -= amount;
    }

    static getRandomNumber(nameAccount) {
        for (let i = 1; i < 5; i++) {
            this.balance = Math.floor(Math.random() * 1000);
            console.log(`Random balance of your account is  ${nameAccount}: ${this.balance}`);
        }
    }
}

export default BankAccount;