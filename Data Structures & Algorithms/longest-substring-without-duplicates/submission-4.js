class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s==="")
           return 0;
        const n = s.length;
        let l=0;
        let r=1;
        const arr= s.split('');
        let maxp=1;
        let c=1;
        let ans=s[0];
        while(r<n){
           if(!ans.includes(arr[r])){
            ans+=arr[r]
            c=c+1;
            maxp=Math.max(maxp,c)
            // l++;
            r=r+1;
           }else{
             l++;
             ans = ans.slice(1);
             c--;
           }
        }
        console.log(c,ans,maxp,'ans');
        return maxp;
    }
}
