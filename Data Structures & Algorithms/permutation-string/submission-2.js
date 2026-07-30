class Solution {
    checkInclusion(s1, s2) {
        const sl1 = s1.length;
        const sl2 = s2.length;

        if (sl1 > sl2) return false;

        let l = 0;
        let r = sl1 - 1;

        let freq = {};

        for (let ch of s1) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        while (r < sl2) {
            let freqCopy = { ...freq };
            let c = 0;

            let i = l;

            while (i <= r) {
                if (freqCopy[s2[i]] > 0) {
                    freqCopy[s2[i]]--;
                    c++;
                } else {
                    break;
                }

                i++;
            }

            if (c === sl1) {
                return true;
            }

            l++;
            r++;
        }

        return false;
    }
}