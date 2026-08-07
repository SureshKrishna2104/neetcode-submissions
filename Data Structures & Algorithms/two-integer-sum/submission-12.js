class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let have = new Map();
        for(let i=0;i<nums.length;i++){
            let diff = target - nums[i];
            if(have.has(diff)){
               return [have.get(diff), i];
            }
            have.set(nums[i],i);
        }
        return[];
    }
}
