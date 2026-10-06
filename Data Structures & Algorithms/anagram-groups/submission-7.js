class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // character array for 26 alphabets
        let map = new Map(); // key = CharArrays, value = [] of strings

        console.log("a".charCodeAt(0))

        for (let str of strs) {
            let key = Array(26).fill(0);

            for (let j = 0; j < str.length; j++) {
                let code = str.charCodeAt(j) - 97;
                key[code] += 1;
            }

            key = key.toString()

            if (map.has(key)) {
                // get array
                let value = map.get(key);
                value.push(str)
            } else {
                map.set(key, [str]);
            }

        }

        let result = []
        for (let values of map.values()) {
            result.push(values);
        }

        return result;
    }
}
