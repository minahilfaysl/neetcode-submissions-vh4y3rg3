class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let endodedStr = ""

        for (let str of strs) {
            endodedStr += str.length + "#" + str;
        }

        return endodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // get length number (all digits up to #)
            while (str[j] !== '#') {
                j++;
            }

            let length = Number(str.substring(i, j));
            let substring = str.substring(j + 1, j + length + 1);

            decodedStrs.push(substring);
            i = j + length + 1;
        }

        return decodedStrs;
    }
}
