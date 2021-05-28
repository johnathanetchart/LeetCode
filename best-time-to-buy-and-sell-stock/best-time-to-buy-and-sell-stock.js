/**
 * @param {number[]} prices
 * @return {number}
 */
//input: prices - array of prices of stock on given days
//output: maximum profit day - number
//constraints:
//edge: no profit - return 0

var maxProfit = function(prices) {
    let maxProfit = 0;
    
    //hills / valleys
    let valleyLoc = 0;
    let hillLoc = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[valleyLoc]) {
            valleyLoc = i;
        } else if (prices[i] - prices[valleyLoc] > maxProfit) {
            maxProfit = prices[i] - prices[valleyLoc];
        }
        
       
    }
    return maxProfit;
};