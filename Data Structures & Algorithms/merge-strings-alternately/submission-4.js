class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let l1 = 0;
        let l2 = 0;
        let str = "";

        let n = word1.length;
        let m = word2.length

        while(l1 < n || l2 < m) {
            if (l1 < n) {str += word1[l1]; l1++;}
            if (l2 < m) {str += word2[l2]; l2++;}
        }

        return str;
    }
}
