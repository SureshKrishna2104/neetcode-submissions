class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         const a = new Set(nums);
         if(a.size !== nums.length){
            return true;
         }
         return false;
    }
}
