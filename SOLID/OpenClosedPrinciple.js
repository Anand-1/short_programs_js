/* This principle states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.
In other words, you should be able to add new functionality to a system without changing existing code. 
This is typically achieved through the use of interfaces, abstract classes, or other forms of abstraction that allow new functionality to be added without altering existing code. 
By following the OCP, developers can create systems that are more flexible and easier to maintain, as new features can be added without risking the stability of existing code. */

class PaymentProcessor{
    processPayment(amount){
      throw new Error('Process payment Needs to be implemented !')
    }
}

class CreditCardPaymentProcessor extends PaymentProcessor{
   processPayment(amount){
    console.log('Processing credit card payment of $${amount}')
   }
}

// PayPal payment processor
class PayPalPaymentProcessor extends PaymentProcessor {
    processPayment(amount) {
        console.log(`Processing PayPal payment of $${amount}`);
    }
}

function processPayment(processor, amount){
    processor.processPayment(amount)
}

function main(){
    const cerditCardProcessor = new CreditCardPaymentProcessor();
    const paypalProcessor = new PayPalPaymentProcessor();
    processPayment(CreditCardPaymentProcessor, 100)
    processPayment(paypalProcessor, 200)
}