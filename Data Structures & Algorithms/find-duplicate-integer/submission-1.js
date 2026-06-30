class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let ans={};
        for(let i of nums ){
            if(ans[i]){
                return i
            }
            ans[i]=i;
        }
    }
}
