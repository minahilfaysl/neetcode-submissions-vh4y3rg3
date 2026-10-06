class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        /*
        space complexity: 
            - map will be O(n)
            - key will be max 26 -> O(1)
            - total = O(n)

        time complexity:
            - for loop outside O(n)
            - for loop inside O(100) max - k
            - separate for loop O(n)

            so O(k * 2n) which is O(k * n)
        */

        // character array for 26 alphabets
        let map = new Map(); // key = CharArrays, value = [] of strings

        for (let str of strs) {
            let key = Array(26).fill(0);

            for (let j = 0; j < str.length; j++) {
                let code = str.charCodeAt(j) - "a".charCodeAt(0);
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
