// dp
function maxSubArray(nums: number[]): number {
  const dp = [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
  dp[0] = nums[0]

  let result = dp[0]

  for (let i = 1; i < nums.length; i++) {
    const curr = i % 2
    const prev = (i - 1) % 2
    dp[curr] = Math.max(dp[prev] + nums[i], nums[i])
    result = Math.max(dp[curr], result)
  }

  return result
}

// greedy
function maxSubArrayGreedy(nums: number[]): number {
  let result = Number.NEGATIVE_INFINITY
  let sum = 0

  for (const num of nums) {
    sum += num
    if (sum > result) {
      result = sum
    }
    if (sum < 0) {
      sum = 0
    }
  }

  return result
}
