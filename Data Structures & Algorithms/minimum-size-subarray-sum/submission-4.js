class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        const n = nums.length;
        if(n===1 && nums[0]===target){
            return 1;
        }
        
        let l=0;
        let r=1;
        let sum=nums[l];
        let c=1;
        let min = Infinity;
        while(r<n){
            sum+=nums[r];
            c++;
            if(nums[r]>=target || nums[l]>=target){
               c=1;
               min=Math.min(min,c);
               l++;
               r=l;
            }
            else if(sum>=target){
                min=Math.min(min,c);
                l++;
                r=l;
                c=1;
                sum=nums[l];
            }
            r++;
        }
        if(min === Infinity){
            min=0;
        }
        return min;
    }
}
