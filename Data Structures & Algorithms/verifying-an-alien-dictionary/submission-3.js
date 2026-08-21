class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {

        // build rank map
        let rank = {};

        for (let i = 0; i < order.length; i++) {
            rank[order[i]] = i;
        }

        // compare adjacent words
        for (let i = 0; i < words.length - 1; i++) {

            let word1 = words[i];
            let word2 = words[i + 1];

            let minLen = Math.min(word1.length, word2.length);

            let foundDifference = false;

            // compare characters
            for (let j = 0; j < minLen; j++) {

                let char1 = word1[j];
                let char2 = word2[j];

                // different characters
                if (char1 !== char2) {

                    if (rank[char1] > rank[char2]) {
                        return false;
                    }

                    foundDifference = true;
                    break;
                }
            }

            // prefix edge case
            if (!foundDifference && word1.length > word2.length) {
                return false;
            }
        }

        return true;
    }
}