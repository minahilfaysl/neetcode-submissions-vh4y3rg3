class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0;
        let maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            while (set.has(char)) {
                set.delete(s[left])
                left++;
            }

            let newLength = right-left+1;
            if (maxLength < newLength) {
                maxLength = newLength;
            }
            set.add(char);
        }

        return maxLength;
    }
}
