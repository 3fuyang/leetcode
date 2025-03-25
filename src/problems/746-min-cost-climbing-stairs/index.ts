function minCostClimbingStairs(cost: number[]): number {
  // dp[i] means minimum cost to reach stair i
  // dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  const dp: number[] = [0, 0]

  // NOTE: The top of the floor is above the end index (`cost.length - 1`)
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }

  return dp[cost.length]
}
