function maxProfit(prices: number[]): number {
  let sortedPrices = [...prices].sort((a, b) => b - a);
  let sortedPricesMap = new Map<number, boolean>();
  for (let i = 0; i < sortedPrices.length; i++) {
    sortedPricesMap.set(sortedPrices[i], true);
  }

  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    const buy = prices[i];
    const [sell, ...rest] = sortedPricesMap.keys();
    const netProfit = sell - buy;
    console.log(sell, buy, sortedPrices, sortedPricesMap.keys());
    if(netProfit > profit) {
      profit = netProfit;
    }
    sortedPricesMap.delete(prices[i]);
  }

  return profit;
};