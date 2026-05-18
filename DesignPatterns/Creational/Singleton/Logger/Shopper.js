const Logger  = require('./Logger');
const logger = new Logger();

class Shopper{
    constructor(name , money =0){
       this.name = name ;
       this.money = money;
       logger.log(`The ${name} have $ ${money} in account`)
    }
}

module.exports = Shopper;