export function change(amount: number, coins: number[]): number {
  // dp[i] means number of combinations that make up to `i`
  // dp[i] = dp[i - coins[i]] + dp[i]
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1 // crucial initialization!

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]]
    }
  }

  return dp[amount]
}
