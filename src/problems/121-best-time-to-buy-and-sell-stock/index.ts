// greedy
export function maxProfit(prices: number[]): number {
  let result = 0
  let min = Number.POSITIVE_INFINITY

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i])
    result = Math.max(result, prices[i] - min)
  }

  return result
}

// DP
export function maxProfitDp(prices: number[]): number {
  if (prices.length === 0) {
    return 0
  }

  // dp[i][0] means max profit on `i`th day if holding the stock
  // dp[i][1] means max profit on `i`th day if not holding the stock
  // dp[i][0] = max(dp[i - 1][0], -prices[i])
  // dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])
  const dp: [number, number][] = Array.from({ length: prices.length }, () => {
    return [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
  })
  dp[0][0] = -prices[0]
  dp[0][1] = 0

  // Time Complexity: O(n)
  // Space Complexity: O(n)
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
  }

  return dp[prices.length - 1][1]
}
