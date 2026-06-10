class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const threshold = Math.floor(nums.length / 3);
        const freq = {};
        const result = [];

        // count frequency
        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        // check which elements exceed n/3
        for (let num in freq) {
            if (freq[num] > threshold) {
                result.push(Number(num));
            }
        }

        return result;
    }
}
