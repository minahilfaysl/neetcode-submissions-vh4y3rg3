class Solution {
    lengthOfLongestSubstring(s) {
        let left = 0;
        let maxLength = 0;
        let set = new Set();

        for (let right = 0; right < s.length; right++) {
            let char = s[right];

            while (set.has(char)) {
                // found duplicate
                set.delete(s[left]);
                left++;
            }
            if (right - left + 1 > maxLength) {
                maxLength = right-left+1;
            }
            set.add(char);
        }

        return maxLength;
    }
}