class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const s1 = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const reversed = s1.split('').reverse().join('');
        if(s1===reversed)
        {
            return true
        }
        return false
    }
}
