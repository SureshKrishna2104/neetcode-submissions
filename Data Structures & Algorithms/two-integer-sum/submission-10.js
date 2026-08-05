class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let have={}
        for(let i=0;i<nums.length;i++){
            have[Number(nums[i])]= i || 0
        }
        console.log(have[3], have)
        for(let i=0;i<nums.length;i++){
            let diff = target-nums[i];
            // console.log(diff);
            // console.log(nums[i],diff,Number(have[diff]))
            console.log(have[i],i,diff, have[diff])
            if(have[diff] && have[diff]!==i){
                return [i,have[diff]]
            }
        }

        return[];

    }
}
