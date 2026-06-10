class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
    let maxWater = 0;
    let left = 0;             
    let right = height.length - 1; 
    while (left < right) {
        let width = right - left;
        let h = Math.min(height[left], height[right]);
        let currentArea = width * h;
        maxWater = Math.max(maxWater, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
    }
}
