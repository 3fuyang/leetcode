export function maxProfit(prices: number[]): number {
  const HOLD = 0
  const COOLDOWN = 1
  const SOLD = 2

  const dp: [number, number, number][] = Array.from(
    {
      length: 2,
    },
    () => [0, 0, 0] as [number, number, number],
  )

  dp[0][HOLD] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    const curr = i % 2
    const prev = (i - 1) % 2
    dp[curr][HOLD] = Math.max(dp[prev][HOLD], dp[prev][COOLDOWN] - prices[i])
    dp[curr][COOLDOWN] = Math.max(dp[prev][SOLD], dp[prev][COOLDOWN])
    dp[curr][SOLD] = dp[prev][HOLD] + prices[i]
  }

  const FINAL = (prices.length - 1) % 2

  return Math.max(dp[FINAL][SOLD], dp[FINAL][COOLDOWN])
}
