/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l=1;
        let r = n;
        // const find= guess(n);
        // if(find === 0){
        //     return n;
        // }
        while(l<=r){
        let mid = l+Math.floor((r-l)/2);
        const find= guess(mid);
        if(find === 0){
            return mid;
        }else if(find === -1){
            r = mid-1;
        }else{
            l=mid+1;
        }
        }
    }
}
