class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const window = new Set();
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            // If the distance between pointers is greater than k, 
            // remove the leftmost element from the set
            if (r - l > k) {
                window.delete(nums[l]);
                l++;
            }

            // If we find the current number in the set, a duplicate exists within distance k
            if (window.has(nums[r])) {
                return true;
            }

            // Add the current number to the set
            window.add(nums[r]);
        }

        return false;
    }
}