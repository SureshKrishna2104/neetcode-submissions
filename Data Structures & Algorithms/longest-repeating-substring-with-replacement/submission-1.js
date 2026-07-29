class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l = 0;
        let r = 0;

        let maxfreq = 0;
        let maxlength = 0;

        const n = s.length;
        let count = {};

        while (r < n) {
            // Add the right character to the frequency map
            count[s[r]] = (count[s[r]] || 0) + 1;

            // Update maximum frequency
            maxfreq = Math.max(maxfreq, count[s[r]]);

            // Current window size
            let windowsize = r - l + 1;

            // If window is invalid, shrink from left
            if (windowsize - maxfreq > k) {
                count[s[l]]--;
                l++;
            }

            // Update maximum length
            maxlength = Math.max(maxlength, r - l + 1);

            // Expand window
            r++;
        }

        return maxlength;
    }
}