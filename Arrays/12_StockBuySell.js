
// Max Profit With K Transactions

// You're given an array of positive integers representing the prices of
// a single stock on various days (each index in the array represents a different day).
// You're also given an integer k, which represents the number of transactions you're allowed to MaxKey.
// One transaction consists of buying the stock on a given day and selling it on another, later days

// Write a function that returns the maximum profit that you can make by buying and selling the stock,
// given k transactions. 

// note that you can only hold one share of the stock at a time; in other words, 
// you can't buy more than one share of the stock on any given day, and you can't buy a share
//  of the stock if you're still holding another share.lengthAlso, you don't nedd to use all k transactions that you're allowed


function maxProfitWithKTransactions(prices, k) {
    if (!prices.length) {
        return 0
    }
    const evenProfits = new Array(prices.length).fill(0)
    const oddProfits = new Array(prices.length).fill(0)
    
    for (let t = 1; t < k + 1; t++) {
        let maxThusFar = -Infinity
        let currentProfits
        let previousProfits

        if (t % 2 === 1) {
            currentProfits = oddProfits
            previousProfits = evenProfits
        } else {
            currentProfits = evenProfits
            previousProfits = oddProfits
        }

        for (let d = 1; d < prices.length; d++) {
            maxThusFar = Math.max(maxThusFar, previousProfits[d - 1] - prices[d - 1])
            currentProfits[d] = Math.max(currentProfits[d - 1], maxThusFar + prices[d])
        }
    }

    return k % 2 === 0 ? evenProfits[prices.length - 1] : oddProfits[prices.length - 1]
}