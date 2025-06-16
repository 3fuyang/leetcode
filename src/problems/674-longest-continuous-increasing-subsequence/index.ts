function findLengthOfLCIS(nums: number[]): number {
  if (nums.length === 1) {
    return 1
  }

  // Initialize dp array with first element as 1
  const dp = [1, 1]
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i % 2] = dp[(i - 1) % 2] + 1
    } else {
      dp[i % 2] = 1 // NOTE: reset to 1
    }
    result = Math.max(result, dp[i % 2])
  }

  return result
}
