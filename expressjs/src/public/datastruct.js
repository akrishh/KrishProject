const a = new Array(1, 2, 3, 7, 5);
// 5 12

class Solution {
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s) {
        let i = 0;
        const val = arr.reduce((cv, pv) => cv + pv, i);
        console.log(val);
        return val;
    }
}

const soln = new Solution();
soln.subarraySum(a, 5, 12);