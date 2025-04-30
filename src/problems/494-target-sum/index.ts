export function findTargetSumWays(nums: number[], target: number): number {
  const sum = nums.reduce((prev, curr) => prev + curr)

  if ((sum + target) % 2 !== 0 || sum < Math.abs(target)) {
    return 0
  }

  const targetSum = (sum + target) / 2
  const n = nums.length
  const dp = Array.from(
    {
      length: n + 1, // a virtual 0 item helps simplify the initialization
    },
    () => new Array(targetSum + 1).fill(0),
  )

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= targetSum; j++) {
      const num = nums[i - 1] // be careful with the `i`, which is 1-based
      dp[i][j] = dp[i - 1][j] + j >= num ? dp[i - 1][j - num] : 0
    }
  }

  return dp[n][targetSum]
}
