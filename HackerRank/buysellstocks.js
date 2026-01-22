let prices = [7, 1, 5, 3, 6, 4]

function buysellstocks(data) {
    let max = 0;
    let buy = 0, sell = 1;
    for (let i = 0; i < data.length - 1; i++) {
        for (let j = 1; j < data.length; j++) {
            if ((data[j] - data[i]) > max) {
                max = data[j] - data[i];
                buy = data[i]; sell = data[j]
            }
        }
    }
    return ['Buy on ' + buy + ' and sell on and  ' + sell, 'make profit of ' + max]
}

function maxProfit(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    // we are increasing the sell price
    for (let sell = 1; sell < prices.length; sell++) {
        let sellPrice = prices[sell];
        let profit = sellPrice - minPrice
        maxProfit = Math.max(maxProfit, profit);
        if (sellPrice < minPrice) minPrice = sellPrice
    }
    return maxProfit
}
console.log(maxProfit(prices))
console.log(buysellstocks(prices))