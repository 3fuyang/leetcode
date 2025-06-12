function combinationSum4(nums: number[], target: number): number {
  const dp: number[] = new Array(target + 1).fill(0)
  dp[0] = 1

  // iterate volumes first
  for (let i = 0; i <= target; i++) {
    // iterate items
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] += dp[i - nums[j]]
      }
    }
  }

  return dp[target]
}
