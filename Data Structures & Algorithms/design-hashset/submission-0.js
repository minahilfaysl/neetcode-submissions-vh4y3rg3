class MyHashSet {
    constructor() {
        this.hashset = [];
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        if (!this.hashset.includes(key)) {
            this.hashset.push(key);
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let index = this.hashset.indexOf(key);

        if (index !== -1) {
            this.hashset.splice(index, 1);
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        return this.hashset.includes(key);
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
