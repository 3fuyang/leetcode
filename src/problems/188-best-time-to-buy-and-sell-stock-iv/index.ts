function maxProfit(k: number, prices: number[]): number {
  const maxTimes = Math.min(k, Math.floor(prices.length / 2))

  // dp[i][0] do nothing
  // dp[i][2 * j - 1] hold on j'th transaction
  // dp[i][2 * j] not hold on j'th transaction
  const dp: number[][] = Array.from(
    {
      length: prices.length,
    },
    () => new Array(2 * maxTimes + 1).fill(0),
  )

  // init
  for (let j = 1; j <= maxTimes; j++) {
    dp[0][2 * j - 1] = -prices[0]
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= maxTimes; j++) {
      // hold
      dp[i][2 * j - 1] = Math.max(
        dp[i - 1][2 * j - 1],
        dp[i - 1][2 * j - 2] - prices[i],
      )
      // not hold
      dp[i][2 * j] = Math.max(
        dp[i - 1][2 * j],
        dp[i - 1][2 * j - 1] + prices[i],
      )
    }
  }

  return dp[prices.length - 1][2 * maxTimes]
}
