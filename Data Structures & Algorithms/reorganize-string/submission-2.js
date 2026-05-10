class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    reorganizeString(s) {

        // frequency map
        const freqMap = new Map();

        for (let char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        // max heap
        const maxHeap = new MaxPriorityQueue(item => item[1]);

        for (let [char, count] of freqMap) {
            maxHeap.enqueue([char, count]);
        }

        let result = "";

        // previously used char
        let prev = null;

        while (!maxHeap.isEmpty()) {

            // get most frequent
            let [char, count] = maxHeap.dequeue();

            // use it
            result += char;
            count--;

            // reinsert previous char AFTER one turn
            if (prev && prev[1] > 0) {
                maxHeap.enqueue(prev);
            }

            // hold current char out temporarily
            prev = [char, count];
        }

        // if we couldn't place everything
        if (result.length !== s.length) {
            return "";
        }

        return result;
    }
}