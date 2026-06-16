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

        while(l1 < word1.length && l2 < word2.length) {
            str += word1[l1] + word2[l2];
            l1++;
            l2++;
        }

        if (l1 < word1.length) {
            str += word1.slice(l1);
        } else if (l2 < word2.length) {
            str += word2.slice(l2);
        }

        return str;
    }
}
