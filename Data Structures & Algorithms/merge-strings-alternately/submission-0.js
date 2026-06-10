class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
      let l=0;
      let r=0;
      if(word1.length>word2.length){
        r=word1.length-1;
      }else{
        r=word2.length-1;
      }
      let newstr='';
      while(l<=r){
        if(!!word1[l]&&!!word2[l]){
          newstr+=word1[l]+word2[l];
          l++;
        }else if(!(!!word1[l])){
          newstr+=word2.slice(l,r+1);
          break;
        }else{
          newstr+=word1.slice(l,r+1)
          break;
        }
      }
      return newstr;
    }
}
