class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {};
        for (let num of nums) {
            freq[num] = (freq[num] || 0) + 1;
        }

        // Step 2: Convert the object into an array of [key, frequency] pairs
        const entries = Object.entries(freq); // [['1', 3], ['2', 2], ['3', 1]]

        // Step 3: Sort by frequency descending
        entries.sort((a, b) => b[1] - a[1]);

        // Step 4: Take the top k and return only the element (not the count)
        const result = [];
        for (let i = 0; i < k; i++) {
            result.push(Number(entries[i][0]));
        }

        return result;
    }
}
