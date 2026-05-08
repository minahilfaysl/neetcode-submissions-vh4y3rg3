class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        let maxHeap = new MaxPriorityQueue();

        for (let num of nums) {
            maxHeap.enqueue(num);
        }

        let num = 0;
        for (let i = 1; i <= k; i++) {
            let value = maxHeap.dequeue();
            if (i === k) {
                num = value;
            }
        }

        return num;
    }
}
