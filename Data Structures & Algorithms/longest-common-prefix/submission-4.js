class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let baseWord = strs[0];

        // Create a character iterator
        for (let charI = 0; charI < baseWord.length; charI++) {

            // Create a word iterator
            // Go over just one letter for each word,
            // and see if matches exist across all words for that char
            for (let wordI = 1; wordI < strs.length; wordI++) {
                if (strs[wordI][charI] != baseWord[charI]) {
                    return baseWord.slice(0, charI)
                }
            }
        }

        return baseWord;
    }
}
