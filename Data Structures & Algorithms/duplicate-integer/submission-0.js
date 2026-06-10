class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums){
            return false;
        }
        const filter = new Set(nums);
         if(filter.size === nums.length)
         {
            return false
         }
         return true;
    }
}
