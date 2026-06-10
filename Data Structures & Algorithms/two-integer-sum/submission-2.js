class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let i=0;
       for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j] === target){
            return [i,j];
        }
        if(j===nums.length-1){
            i++;
            j=i;
        }
       }
    }
}
