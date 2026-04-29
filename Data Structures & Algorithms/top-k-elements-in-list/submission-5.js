class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let counts = {}; // key: num, value: count;

        for (let num of nums) {
            if (counts[num]) {
                counts[num]++;
            } else {
                counts[num] = 1;
            }
        }

        // let array = Object.entries(counts).map(([num, count]) => [
        //     num,
        //     count,
        // ]);
        // array.sort((a,b) => b[1] - a[1]);

        // return array.slice(0, k).map(([num, count]) => num);


        // Using a min heap
        const heap = new MaxPriorityQueue((x) => x[1]);

        for (const [num, cnt] of Object.entries(counts)) {
            heap.enqueue([num, cnt]);
        }

        const res = [];
        for (let i = 0; i < k; i++) {
            const [num, cnt] = heap.dequeue();
            res.push(num);
        }
        return res;
    }
}
