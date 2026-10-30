class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        let stack = [];          // Stores previous strings and repetition counts
        let currentString = "";  // Builds the string we're currently decoding
        let currentNumber = 0;   // Builds the repetition number (e.g., 3 in 3[ab])

        for (let char of s) {

            // CASE 1: If the character is a digit, build the repetition number.
            // Multiplying by 10 lets us handle multi-digit numbers like 12.
            if (!isNaN(char)) {
                currentNumber = currentNumber * 10 + Number(char);
            }

            // CASE 2: If we encounter '[', a new encoded section begins.
            else if (char === "[") {

                // Save the string we've built so far.
                stack.push(currentString);

                // Save how many times the upcoming section should repeat.
                stack.push(currentNumber);

                // Reset both variables to decode the new section independently.
                currentString = "";
                currentNumber = 0;
            }

            // CASE 3: If we encounter ']', the current section is complete.
            else if (char === "]") {

                // Retrieve the repetition count for this section.
                let num = stack.pop();

                // Retrieve the string that existed before this section began.
                let prevStr = stack.pop();

                // Repeat the decoded section 'num' times,
                // then append it to the string from before the '['.
                currentString = prevStr + currentString.repeat(num);
            }

            // CASE 4: Otherwise, the character is a regular letter.
            else {
                // Add the letter to the string we're currently building.
                currentString += char;
            }
        }

        // Return the fully decoded string.
        return currentString;
    }
}