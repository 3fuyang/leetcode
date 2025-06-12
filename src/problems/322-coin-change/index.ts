export function coinChange(coins: number[], amount: number): number {
  if (amount === 0) {
    return 0
  }

  // dp[j] means the fewest number of coins we need
  // to make up that amount
  // dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
  const dp: number[] = new Array(amount + 1).fill(Number.POSITIVE_INFINITY)
  dp[0] = 0

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j])
    }
  }

  return dp[amount] < Number.POSITIVE_INFINITY ? dp[amount] : -1
}
