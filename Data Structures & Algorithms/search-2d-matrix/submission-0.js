class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        // choose what row to search in
        // if target > row[0] && target < row[length-1]
        // search this row, using mid value (left < right)
        // else move onto the next one
        // but first, binary search algo
        // now encase this into row by row
        // what is the midpoint of a 2D array?
        
        let leftX = 0;
        let rightX = matrix.length - 1;
        let colSize = matrix[0].length - 1;

        while(leftX <= rightX) {
            let midX = Math.floor((leftX + rightX) / 2);

            if (matrix[midX][0] <= target && target <= matrix[midX][colSize]) {
                // search this row
                let row = matrix[midX]; // mid row
                let leftY = 0; // first column
                let rightY = row.length -1; // last column

                while (leftY <= rightY) {
                    let midY = Math.floor((leftY + rightY) / 2);

                    if (target > row[midY]) {
                        // move left pointer forwards
                        leftY = midY + 1;
                    }
                    else if (target < row[midY]) {
                        // move right pointer back
                        rightY = midY - 1;
                    }
                    else if (target === row[midY]) {
                        return true;
                    }
                }
                return false;

            } else if (target < matrix[midX][colSize]){
                // move right pointer to prev row
                rightX = midX - 1;

            } else if (target > matrix[midX][0]){
                // move midX pointer to mid of prev rows
                leftX =  midX + 1;
            }
        }

        return false;

    }
}
