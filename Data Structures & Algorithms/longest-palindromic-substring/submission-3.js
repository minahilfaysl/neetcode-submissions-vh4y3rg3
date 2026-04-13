class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    longestPalindrome(s) {
        let start = 0;
        let end = 0;

        function expand(i, j) {
            while (i >= 0 && j < s.length && s[i] === s[j]) {
                i--;
                j++;
            }

            return j - i - 1;
        }

        for (let i = 0; i < s.length; i++) {
            let odd = expand(i, i);
            let even = expand(i, i+1);

            let len = Math.max(odd, even);

            if (len > end - start) {
                start = i - Math.floor((len - 1) / 2);
                end = i + Math.floor(len / 2);
            }
        }

        return s.slice(start, end + 1);
    }
}
