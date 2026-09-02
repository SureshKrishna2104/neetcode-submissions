class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let n= nums.length -1;
        if(nums[n]<target){
            return n+1;
        }
        let l=0;
        let mid ;

        while(l<=n){
            mid = l+ Math.floor((n-l)/2);
            if(nums[mid] < target && nums[mid+1]> target){
                return mid+1;
            }
            if(nums[mid]-1 === target || nums[mid] === target) {
                 return mid;
            }
            if(nums[mid]<target){
                l=mid+1;
            }else{
                n=mid-1;
            }
        }
        return 0;
        
    }
}
