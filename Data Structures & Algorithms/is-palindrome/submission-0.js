class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    containsNonAlphanumeric(str) {
        // Matches any character that is NOT a letter (a-z, A-Z), or digit (0-9).
        const nonAlphanumericRegex = /[^a-zA-Z0-9]/g;
        return str.match(nonAlphanumericRegex); 
    }

    isPalindrome(s) {
        let i = 0;
        let j = s.length-1;

        while (i < j) {

            console.log(s[i], s[j]);
            if (this.containsNonAlphanumeric(s[i])) {
                i++;
                continue;
            }

            if (this.containsNonAlphanumeric(s[j])) {
                j--;
                continue;
            }

            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false;
            }

            i++;
            j--;
        }

        return true;
    }
}
