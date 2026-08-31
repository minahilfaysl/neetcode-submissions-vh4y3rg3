class Solution {
    rob(nums) {
        const robRange = (start, end) => {
            let prev2 = 0;
            let prev1 = 0;

            for (let i = start; i <= end; i++) {
                const current = Math.max(
                    prev1,
                    nums[i] + prev2
                );

                prev2 = prev1;
                prev1 = current;
            }

            return prev1;
        };

        if (nums.length === 1) return nums[0];

        return Math.max(
            robRange(0, nums.length - 2),
            robRange(1, nums.length - 1)
        );
    }
}