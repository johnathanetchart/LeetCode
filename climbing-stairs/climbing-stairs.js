/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(top) {
    let memo = {};
    let recursion = (current, top, memo) => {
        if(current > top) {
            return 0;
        }
        if(current === top) {
            return 1;
        }
        if (memo[current]) { //try no 0
            return memo[current];
        }
        memo[current] = recursion(current + 1, top, memo) + recursion(current + 2, top, memo);
        return memo[current];
    };
    return recursion(0, top, memo);
};
