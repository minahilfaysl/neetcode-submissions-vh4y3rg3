class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;

        while (r - l >= k) {
            let diff = Math.abs(arr[l] - x) <= Math.abs(arr[r] - x);
            

            if (diff) { // left is smaller, r--
                r--;
            } else {
                l++; // right is smaller, l--
            }

        }

        return arr.slice(l, r + 1);
    }
}