// revisit Important

console.log('LRU cache implementaion started !')

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.order = [];
    }
    get(key) {
        if (!this.cache.has(key)) {
            return -1;
        }
        let value = this.cache.get(key);
        this._updateOrder(key);
        return value;
    }
    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.set(key, value);
            this._updateOrder(key);
        } else {
            if (this.cache.size >= this.capacity) {
                let lru = this.order.shift();
                this.cache.delete(lru);
            }
            this.cache.set(key, value);
            this.order.push(key);
        }
    }
    _updateOrder(key) {
        let index = this.order.indexOf(key);
        if (index > -1) {
            this.order.splice(index, 1);
        }
        this.order.push(key);
    }
}
// Example usage
let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); 
lru.put(3, 3); 
console.log(lru.get(2)); 
lru.put(4, 4); 
console.log(lru.get(1)); 
console.log(lru.get(3)); 
console.log(lru.get(4));

// Function to display the current state of the cache
lru.displayCache = function() {
    console.log("Current cache state:");
    for (let key of this.order) {
        console.log(`Key: ${key}, Value: ${this.cache.get(key)}`);
    }
};

// Display the current state of the cache
lru.displayCache();

