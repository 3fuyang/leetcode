function findLength(nums1: number[], nums2: number[]): number {
  let result = 0
  // dp[i][j] means the maximum length of the subarray appearing
  // in both nums1[0..i] and nums2[0..j]
  const dp = Array.from(
    {
      length: nums1.length + 1,
    },
    () => new Array(nums2.length + 1).fill(0),
  )

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      }
      result = Math.max(result, dp[i][j])
    }
  }

  return result
}
