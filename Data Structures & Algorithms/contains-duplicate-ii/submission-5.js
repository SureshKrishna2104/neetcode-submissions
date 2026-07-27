class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();
        for(let r=0;r<nums.length;r++){
            if(window.has(nums[r])){
                return true;
            }

            window.add(nums[r])

            if(window.size>k){
                window.delete(nums[r-k])
            }
        }
        return false;
    }
}
