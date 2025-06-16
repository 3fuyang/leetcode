export function lengthOfLIS(nums: number[]): number {
  //  j = 0..i
  //  if dp[i] > dp[j]:
  //  dp[i] = max(dp[i], dp[j] + 1)
  const dp = new Array(nums.length).fill(1)
  let result = 1

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(result, dp[i])
  }

  return result
}
