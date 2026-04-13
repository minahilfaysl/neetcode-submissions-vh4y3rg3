class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let baseWord = strs[0];

        // Create a base iterator
        for (let charI = 0; charI < baseWord.length; charI++) {

            for (let wordI = 1; wordI < strs.length; wordI++) {
                if (strs[wordI][charI] != baseWord[charI]) {
                    return baseWord.slice(0, charI)
                }
            }
        }

        return baseWord;
    }
}
