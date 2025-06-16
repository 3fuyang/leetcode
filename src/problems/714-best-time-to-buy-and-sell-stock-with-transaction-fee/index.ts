function maxProfit(prices: number[], fee: number): number {
  const HOLD = 0
  const NOT_HOLD = 1
  const dp = [
    [0, 0],
    [0, 0],
  ]

  dp[0][HOLD] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    const curr = i % 2
    const prev = (i - 1) % 2
    dp[curr][HOLD] = Math.max(dp[prev][HOLD], dp[prev][NOT_HOLD] - prices[i])
    dp[curr][NOT_HOLD] = Math.max(
      dp[prev][NOT_HOLD],
      dp[prev][HOLD] + prices[i] - fee,
    )
  }

  const FINAL = (prices.length - 1) % 2

  return dp[FINAL][NOT_HOLD]
}
