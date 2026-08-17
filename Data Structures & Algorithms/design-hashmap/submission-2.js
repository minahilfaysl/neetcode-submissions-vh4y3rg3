class MyHashMap {
    constructor() {
        this.hashmap = new Array(1000001).fill(-1);
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        this.hashmap[key] = value;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        return this.hashmap[key];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        this.hashmap[key] = -1;
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
