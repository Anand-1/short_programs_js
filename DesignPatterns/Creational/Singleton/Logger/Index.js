const Logger = require("./Logger");
const Shopper = require('./Shopper');
const Store = require('./Store')

var logger = new Logger();
var anand = new Shopper('Anand', 5000);

var store = new Store('New Works ', [{
    name: 'New Good', 
    price: 400
},{
    name: 'Old Good', 
    price: 404
}])

logger.log('Finishing Configs..')
console.log(`Counts is ${logger.Count}`)
console.log(logger.logs)