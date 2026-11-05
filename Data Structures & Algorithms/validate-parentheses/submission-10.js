class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        // stack = "([{"
        // check if "}" exists in the map

        let stack = [];
        let map = {
            "}": "{",
            "]": "[",
            ")": "("
        }

        for (let char of s) {
            if (map[char]) {
                let prev = stack.pop();
                if (map[char] !== prev) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
