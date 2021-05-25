/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    
    if(n == 1 || n == 0 ) {
        return 1;
    }
    let oneStep = 1;
    let twoStep = 2;
    
    for( let i = 3; i <= n; i++) {
        let nextStep = oneStep + twoStep;
        oneStep = twoStep;
        twoStep = nextStep;
    }
    return twoStep;
};