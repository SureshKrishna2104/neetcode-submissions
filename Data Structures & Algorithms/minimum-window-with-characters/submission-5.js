class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return "";

        const need = {};
        const window = {};

        // Frequency of characters required
        for (let ch of t) {
            need[ch] = (need[ch] || 0) + 1;
        }

        const required = Object.keys(need).length;
        let formed = 0;

        let l = 0;
        let minLen = Infinity;
        let start = 0;

        for (let r = 0; r < s.length; r++) {

            // Expand window
            let ch = s[r];
            window[ch] = (window[ch] || 0) + 1;

            // Check if current character satisfies its required frequency
            if (need[ch] && window[ch] === need[ch]) {
                formed++;
            }

            // Shrink while window is valid
            while (formed === required) {

                // Update answer
                if (r - l + 1 < minLen) {
                    minLen = r - l + 1;
                    start = l;
                }

                // Remove left character
                let leftChar = s[l];
                window[leftChar]--;

                // Window is no longer valid
                if (need[leftChar] && window[leftChar] < need[leftChar]) {
                    formed--;
                }

                l++;
            }
        }

        return minLen === Infinity ? "" : s.slice(start, start + minLen);
    }
}