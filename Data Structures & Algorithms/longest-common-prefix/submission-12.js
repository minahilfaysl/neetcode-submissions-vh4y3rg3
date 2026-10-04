class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let baseWord = strs[0];
        
        // compare each character of baseword with each str with the character at that position
        for(let i = 0; i < baseWord.length; i++) {
            let baseChar = baseWord[i];

            // iterate over all strings, and compare characters at i position
            for (let j = 1; j < strs.length; j++) {
                // check if index i exists for string j
                if (i >= strs[j].length || baseChar != strs[j][i]) {
                    return baseWord.slice(0, i);
                }
            }
        }

        // all match
        return baseWord;
    }
}
