class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x) {
        if (x < 0 || (x % 10 === 0 && x !== 0)) return false
        x = x.toString();

        if (x.length === 1) return true;

        let left = 0;
        let right = x.length - 1;

        while (left < right) {
            if (x[left] !== x[right]) return false;

            left++;
            right--;
        }

        return true
    }
}
