class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let have = new Map();
        for(let str of strs){
            let sor= str.split('').sort((a,b)=>a.localeCompare(b));
            if(!have[sor]){
                have[sor]=[];
            }
            have[sor].push(str);
        }
        return Object.values(have);
    }
}
