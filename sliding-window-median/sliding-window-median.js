/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let results = [];
    let leftPos = 0;
    let rightPos = k - 1;
    let mid;
    let slice;
    for(;rightPos < nums.length; leftPos++, rightPos++) {
        if(k % 2 === 0) { //if even
            slice = nums.slice(leftPos, rightPos + 1).sort((a,b) => a-b);
            mid = slice.length/2;
            results.push((slice[mid] + slice[mid - 1]) / 2);
            
        } else {
            slice = nums.slice(leftPos, rightPos + 1).sort((a,b) => a-b);
            mid = Math.floor(slice.length/2);
            results.push(slice[mid]);
        }
    }
    return results;
};