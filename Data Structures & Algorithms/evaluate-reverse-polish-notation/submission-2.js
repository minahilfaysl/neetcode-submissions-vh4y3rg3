class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        let operators = ['+', '-', '*', '/']

        for (let token of tokens) {
            console.log(stack)
            if (!operators.includes(token)) {
                stack.push(Number(token));
                continue;
            }

            let num1 = stack.pop();
            let num2 = stack.pop();

            if (token === '+') {
                stack.push(num2 + num1);
            }

            if (token === '-') {
                stack.push(num2 - num1);
            }

            if (token === '*') {
                stack.push(num2 * num1);
            }

            if (token === '/') {
                stack.push(Math.trunc(num2 / num1));
            }
        }

        return stack.pop();
    }
}
