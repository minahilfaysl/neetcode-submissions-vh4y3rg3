class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (strs.length === 0) return "";

        let prefix = "";
        let base = strs[0];

        for (let i = 0; i < base.length; i++) {
            let char = base[i];

            for (let j = 1; j < strs.length; j++) {
                if (strs[j][i] !== char) {
                    return prefix;
                }
            }

            prefix += char;
        }

        return prefix;
    }
}
