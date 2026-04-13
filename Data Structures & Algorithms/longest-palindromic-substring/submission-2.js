class Solution {
    /**
     * @param {string} s
     * @return {string}
     */

    isPalindrome(s) {
        let left = 0;
        let right = s.length-1;

        while (left <= right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }

    longestPalindrome(s) {
        let start = 0;
        let end = s.length - 1;
        let maxLength = 0;

        for (let left = 0; left < s.length; left++) {
            let right = s.length - 1
            
            while (left <= right) {
                let substring = s.slice(left, right+1);
                let newLength = right-left+1;
                if (newLength > maxLength && this.isPalindrome(substring)) {
                    start = left;
                    end = right;
                    maxLength = newLength;
                }
                right--;
            }
        }

        return s.slice(start, end + 1);
    }
}
