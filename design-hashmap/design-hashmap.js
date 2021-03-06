/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.storage = {};
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    //create new value at key
    //OR update value at existing key
    // if(this.storage[key] === undefined) {
    //     this.storage[key] = value;
    // }
    this.storage[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    //output value at key
    //OR -1 if not
    if(this.storage[key] === undefined) {
        return -1;
    }
    return this.storage[key];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    //deletes storage at key
    delete this.storage[key];
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */