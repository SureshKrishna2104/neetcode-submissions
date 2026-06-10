class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twopass(nums, target) {
      // using hash two pass
      let ind={};
       for(let i=0;i<nums.length;i++ ){
        ind[nums[i]]=i;
      }
       for(let i=0;i<nums.length;i++ ){
       const diff = target - nums[i];
       if(ind[diff] !==undefined && ind[diff]!==i){
        return [i, ind[diff]]
       }
      }
    }
    onepass(nums, target) {
      const prevMap = new Map();
       for(let i=0;i<nums.length;i++ ){
       const diff = target - nums[i];
       if(prevMap.has(diff)){
         return [prevMap.get(diff), i];
       }
       prevMap.set(nums[i],i)
      }
    }


twoSum(nums, target) {
  return this.onepass(nums,target)
    }
}
