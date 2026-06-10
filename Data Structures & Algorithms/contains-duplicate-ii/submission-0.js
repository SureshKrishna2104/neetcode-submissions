class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        // nums.sort((a,b)=>a-b);
        // [1,1,2,3]
        // l=0,r=3, l=1,r=3 1==3 3-1 >3 r-- r=2 l=1,r=2 , r=1 1===1 
        let l=0;
        let r=nums.length-1;
        while(l<r){
            console.log(l,r,nums[l],nums[r]);
            if(nums[l]===nums[r] && Math.abs(r-l)<=k){
                return true;
            }else if(Math.abs(r-l)>k){
                l++;
            }else{
                r--;
            }
        }
        return false;

    }
}
