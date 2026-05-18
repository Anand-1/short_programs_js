const Logger = require('./Logger')
var logger = new Logger();

class Store{
    constructor(name, inventory=[]){
       this.name = name ;
       this.inventory = inventory;
       logger.log(`The new store ${name} has ${inventory} in stocks` )
    }
}
module.exports = Store;