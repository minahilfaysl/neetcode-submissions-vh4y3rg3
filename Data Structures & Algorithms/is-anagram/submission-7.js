class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length != t.length) return false;

        let freqArray = Array(26).fill(0);

        for (let i = 0; i < s.length; i++) {
            let codeS = s.charCodeAt(i) - "a".charCodeAt(0);
            let codeT = t.charCodeAt(i) - "a".charCodeAt(0);
            freqArray[codeS]++;
            freqArray[codeT]--;
        }

        for (let count of freqArray) {
            if (count !== 0) return false;
        }

        return true;
    }
}
