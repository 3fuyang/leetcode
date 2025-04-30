export function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((prev, curr) => prev + curr)

  if (sum % 2 > 0) {
    return false
  }

  const target = sum / 2
  // one-dimensional dp array for optimization on space
  // here j means capacity:
  //   dp[j] = dp[j] || dp[j - nums[i]]
  const dp: boolean[] = new Array(target + 1).fill(false)
  // initialize dp array
  dp[0] = true

  // traverse the item(number)s from right to left
  for (const num of nums) {
    for (let j = target; j > 0; j--) {
      // guard
      if (j >= num) {
        dp[j] = dp[j] || dp[j - num]
      }
    }
  }

  return dp[target]
}
