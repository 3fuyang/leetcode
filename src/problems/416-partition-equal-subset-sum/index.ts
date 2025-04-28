export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((prev, curr) => prev + curr)

  if (sum % 2 > 0) {
    return false
  }

  const volume = sum / 2
  const dp: number[][] = Array.from({ length: nums.length }, () =>
    new Array(volume + 1).fill(0),
  )

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= volume; j++) {
      if (nums[i] > j) {
        dp[i][j] = dp[i - 1][j]
        continue
      }

      dp[i][j] = Math.max(dp[i - 1][j], nums[i] + dp[i - 1][j - nums[i]])
    }
  }

  return dp[nums.length - 1][volume] === volume
}
