// Single responsibility principle (SRP) states that a class should have only one reason to change. 
// In other words, a class should have only one responsibility or job. 
// This principle helps to keep code organized, maintainable, and easier to understand. 
// By adhering to SRP, developers can create classes that are focused on a single task, 
// making it easier to modify and extend the code without affecting other parts of the system.

class BreadBaker{
    bakeBread(){
        console.log("Baking bread...");
    }                       
}

class InventoryManager{
    manageInventory(){
        console.log("Managing inventory...");
    }
}

class OrderProcessor{
    processOrder(){
        console.log("Processing order...");
    }
}

// Example usage:
function BakeryStarter(){
    const breadBaker = new BreadBaker();
    const inventoryManager = new InventoryManager();
    const orderProcessor = new OrderProcessor();

    breadBaker.bakeBread();
    inventoryManager.manageInventory();
    orderProcessor.processOrder();
}

BakeryStarter();