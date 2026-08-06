class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
let sum=1;
let c=0;
const n = nums.length;
for(let i of nums){
    if(i!==0){
        sum*=i
    }else{
        c++;
    }
}
  if (c > 1) {
        return Array(nums.length).fill(0);
    }
let res=[];

for(let i=0;i<n;i++){
    if(nums[i]===0){
        res = Array(n).fill(0)
        res[i]=sum;
        break
    }else{
        res.push(sum/nums[i]);
    }
}

return res;
    }
}
