class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        if (s === "") return "";

        let stack = []; // stack should contain, current string and current number
        let currentNumber = 0;
        let currentString = "";

        for (let char of s) {
            if (!isNaN(char)) {
                // if the char is a number
                 currentNumber = currentNumber * 10 + Number(char);
            }

            else if (char === '[') { // starting bracket
                // add the string
                stack.push(currentString);
                // save the number in the stack
                stack.push(currentNumber);

                // current and number string reset
                currentString = "";
                currentNumber = 0;
            }

            else if (char === ']') {
                // pop chars and the number
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
