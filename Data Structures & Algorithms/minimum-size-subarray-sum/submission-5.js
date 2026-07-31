class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l = 0;
        let sum = 0;
        let minLen = Infinity;

        for (let r = 0; r < nums.length; r++) {
            // Expand window
            sum += nums[r];

            // Shrink while window is still valid
            while (sum >= target) {
                minLen = Math.min(minLen, r - l + 1);

                sum -= nums[l];
                l++;
            }
        }

        return minLen === Infinity ? 0 : minLen;
    }
}