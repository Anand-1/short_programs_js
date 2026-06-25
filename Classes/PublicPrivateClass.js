class BankAccount{
    customerName;
    #initialBalance;
    constructor(customerName,balance ){
       this.customerName = customerName;
       this.#initialBalance = balance;
    }
    
    set updatebalance(value){
         this.#initialBalance = value+ this.#initialBalance;
    }
    displayAccountInfo(){
        console.log('The customer ' + this.customerName +' has $' + this.#initialBalance)
        this.#logCustomerDisplay()
    }
    #logCustomerDisplay(){
        console.log('Customer logged !')
    }
}

const customer1 = new BankAccount('Anand' , 0)
customer1.displayAccountInfo()
customer1.updatebalance(10)
customer1.displayAccountInfo()
// class AnandBankAccount extends BankAccount{
//     constructor()
// }