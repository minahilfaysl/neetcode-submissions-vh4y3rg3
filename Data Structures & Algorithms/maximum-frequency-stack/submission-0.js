class FreqStack {
    constructor() {
        this.freq = new Map();
        this.group = new Map();
        this.maxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // Increase the frequency of this value.
        let f = (this.freq.get(val) || 0) + 1;
        this.freq.set(val, f);

        // Update the maximum frequency.
        this.maxFreq = Math.max(this.maxFreq, f);

        // Create a stack for this frequency if needed.
        if (!this.group.has(f)) {
            this.group.set(f, []);
        }

        // Record that val has reached frequency f.
        this.group.get(f).push(val);
    }

    /**
     * @return {number}
     */
    pop() {
        // Get the most recently added value at maxFreq.
        let stack = this.group.get(this.maxFreq);
        let val = stack.pop();

        // Decrease its frequency.
        this.freq.set(val, this.freq.get(val) - 1);

        // If this frequency group is empty, reduce maxFreq.
        if (stack.length === 0) {
            this.maxFreq--;
        }

        return val;
    }
}