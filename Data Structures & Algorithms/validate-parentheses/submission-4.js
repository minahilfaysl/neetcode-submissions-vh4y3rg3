class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ')' : '(',
            ']' : '[',
            '}' : '{'
        };

        for (let char of s) {
            // if we have a closing bracket (check stack)
            if (map[char]) {
                let top = stack.pop();

                if (top !== map[char]) {
                    return false;
                }
            } else {
                // add to stack
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
