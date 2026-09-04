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
        let l=0;
        const find= guess(n);
        if(find === 0){
            return n;
        }
        while(l<n){
        let mid = l+Math.floor((n-l)/2);
        const find= guess(mid);
        if(find === 0){
            return mid;
        }else if(find === -1){
            n = mid;
        }else{
            l=mid;
        }
        }
    }
}
