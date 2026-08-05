class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  let have = {};
    for (let i = 0; i < nums.length; i++) {
        have[nums[i]] = (have[nums[i]] || 0) + 1;
    }
    return Object.entries(have)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(entry => Number(entry[0]));
    }
}
