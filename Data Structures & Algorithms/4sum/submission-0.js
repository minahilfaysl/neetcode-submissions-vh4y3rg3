class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    fourSum(nums, target) {
        let n = nums.length;
        let result = [];

        // Sort the array
        nums.sort((a, b) => a - b);

        for (let i = 0; i < n - 3; i++) {
            // Skip duplicate i
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }

            for (let j = i + 1; j < n - 2; j++) {
                // Skip duplicate j
                if (j > i + 1 && nums[j] === nums[j - 1]) {
                    continue;
                }

                let left = j + 1;
                let right = n - 1;

                while (left < right) {
                    const sum =
                        nums[i] +
                        nums[j] +
                        nums[left] +
                        nums[right];

                    if (sum === target) {
                        result.push([
                            nums[i],
                            nums[j],
                            nums[left],
                            nums[right]
                        ]);

                        left++;
                        right--;

                        // Skip duplicate left values
                        while (
                            left < right &&
                            nums[left] === nums[left - 1]
                        ) {
                            left++;
                        }

                        // Skip duplicate right values
                        while (
                            left < right &&
                            nums[right] === nums[right + 1]
                        ) {
                            right--;
                        }

                    } else if (sum > target) {
                        right--;

                    } else {
                        left++;
                    }
                }
            }
        }

        return result;
    }
}