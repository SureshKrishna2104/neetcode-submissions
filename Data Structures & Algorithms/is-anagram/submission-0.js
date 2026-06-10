class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s1= s.split('').sort((a,b)=>a.localeCompare(b)).join('');
        const t1= t.split('').sort((a,b)=>a.localeCompare(b)).join('');
        if(s1 === t1){
            return true;
        }
        return false
    }
}
