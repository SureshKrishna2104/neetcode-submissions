class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
                const res = [];
        for (let s of strs) {
            res.push(String(s.length), '#', s);
        }
        return res.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(strs) {
            let res=[];
    let i=0;
    const n = strs.length;
    while(i<n){
        let j=i;
        while(strs[j]!=='#'){
            j++;
        }
        let length = parseInt(strs.substring(i,j));
        i=j+1;
        j=i+length;
        res.push(strs.substring(i, j));
        i = j;
    }
    return res
    }
}
