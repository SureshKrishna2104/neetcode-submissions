class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        const n = nums.length;
        k=k%n;
        let count=0;
        for(let start=0;count<n;start++){
            let current =start;
            let prev = nums[start];
            do{
              let currentIdx = (current + k)%n;
              let temp = nums[currentIdx];
              nums[currentIdx] = prev;
              current = currentIdx;
              prev = temp;
              count++;
            }while(start !== current)
        }


    }
}
