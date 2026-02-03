class BankAccount {
  balance;
  owner;

  constructor(accData) {
    this.owner = accData.owner;
    this.balance = 0;
    this.deposit(accData.balance);

    console.log(
      `New account created \nUser: ${this.owner} \nBalance: ${this.balance}`
    );
  }

  deposit(d) {
    console.log(`Your new balance is: ${(this.balance += d)}`);
  }

  withdraw(w) {
    console.log(`Your new balance is: ${(this.balance -= w)}`);
  }

  getBalance() {
    console.log(`Your current balance is: ${this.balance}`);
  }
}

const accData = {
  balance: 1000,
  owner: "Dylan",
};

const bankAccount = new BankAccount(accData);
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.getBalance();
