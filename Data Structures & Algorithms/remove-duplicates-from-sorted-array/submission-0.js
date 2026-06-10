class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l=1;
        let r=nums.length;
        let k=1;
        while(l<r){
           if (nums[l] !== nums[l - 1]){
            nums[k]=nums[l];
            k++;
           }
            l++;
        }
        return k;
    }
}
