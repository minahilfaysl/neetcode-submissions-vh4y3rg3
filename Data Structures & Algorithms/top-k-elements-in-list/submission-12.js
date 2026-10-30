class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // get the counts first
        let counts = {}
        for (let num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        }

        // then add to min priority queue O(log n)
        let heap = new MinPriorityQueue((x) => x[1]); // sort based on counts

        for (let [num, count] of Object.entries(counts)) {
            heap.enqueue([num, count]);
            if (heap.size() > k) heap.dequeue();
        }

        const result = [];
        for (let i = 0; i < k; i++) {
            const [num, _] = heap.dequeue();
            result.push(num);
        }
        return result;
    }
}
