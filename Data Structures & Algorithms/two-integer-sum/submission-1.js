class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const a=[]
        for(let i=0;i<nums.length;i++){
        const first= nums[i];
        for(let j=i+1;j<nums.length;j++){
            if(target-first === nums[j]){
                a.push(i)
                a.push(j)
            }
        }
        }
         return a;
    }
}
