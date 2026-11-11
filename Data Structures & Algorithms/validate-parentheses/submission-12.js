class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = {
            ']' : '[',
            '}' : '{',
            ')' : '('
        };

        let stack = [];

        for (let char of s) {
            if (map[char]) {
                if (stack.pop() !== map[char]) return false;
            } else {
                stack.push(char);
            }
        }

        return stack.length ? false : true;
    }
}
