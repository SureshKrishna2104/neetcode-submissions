class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const unique = new Set(nums);
        let longest=0;
        for(let val of nums){
            if(!unique.has(val-1)){
                let current=val;
                let count = 1;
                while(unique.has(current+1)){
                    current++;
                    count++;
                }
                longest = Math.max(longest, count);
            }
        }
        return longest;

    }
}
