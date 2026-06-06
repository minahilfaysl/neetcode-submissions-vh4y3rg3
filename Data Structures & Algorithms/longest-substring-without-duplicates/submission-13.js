class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set()
        let left = 0;
        let max = 0;

        for (let right = 0; right < s.length; right++) {
            let char = s[right]
            while(set.has(char)) {
                set.delete(s[left]);
                left++;
            }

            if (!set.has(char)) {
                set.add(char);
                max = Math.max(max, right - left + 1);
            }
        }

        return max;

    }
}
