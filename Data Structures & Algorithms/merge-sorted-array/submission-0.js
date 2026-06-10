class Solution {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */
    merge(nums1, m, nums2, n) {
        let l=0;
        let r=m;
        while(r<m+n){
               nums1[r]=nums2[l];
               r++;
               l++;
        }
        return nums1.sort((a,b)=>a-b);
    }
}
