class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];
        let currentString = "";
        let currentNumber = 0;

        for (let char of s) {
            if (!isNaN(char)) {
                currentNumber = currentNumber * 10 + Number(char);
            } else if (char === "[") {
                stack.push(currentString);
                stack.push(currentNumber);

                currentString = "";
                currentNumber = 0;
            } else if (char === "]") {
                let num = stack.pop();
                let prevStr = stack.pop();

                currentString = prevStr + currentString.repeat(num);
            }

            else {
                currentString += char;
            }
        }

        return currentString;
    }
}
