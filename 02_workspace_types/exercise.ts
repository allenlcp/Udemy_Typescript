type bankAccountType = {money: number, deposit: (value: number) => void};

let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type bankAccountClient = {name: string, bankAccount: bankAccountType, hobbies:string[]};
let myself: bankAccountClient = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: ['Sports','Cooking']
};

myself.bankAccount.deposit(3000);
console.log(myself);
