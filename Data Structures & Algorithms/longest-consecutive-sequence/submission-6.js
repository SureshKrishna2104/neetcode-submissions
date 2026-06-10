class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
       const uniqueSorted = [...new Set(nums)].sort((a, b) => a - b);
         console.log(uniqueSorted);  // [2, 3, 4, 5, 10, 20]

        let maxLen = 1;
        let currLen = 1;

   for (let i = 1; i < uniqueSorted.length; i++) {
  if (uniqueSorted[i] === uniqueSorted[i - 1] + 1) {
    currLen += 1;
    maxLen = Math.max(maxLen, currLen);
  } else {
    currLen = 1;
  }
}
return maxLen;
}
}