/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    
    while(start <= end) {
        
        let mid = Math.floor((end + start) / 2);
        console.log(mid)
        if(target === nums[mid]) {
            return mid;
        }
        if(target < nums[mid]) {
            //check left
            if(end === mid) {
                end = mid - 1;
            } else {
                end = mid;
            }
        }
        if(target > nums[mid]) {
            //check right
            if(start === mid) {
                start = mid + 1;
            } else {
                start = mid;
            }
        }
    }
    return -1;
};