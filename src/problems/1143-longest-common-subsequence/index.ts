function longestCommonSubsequence(text1: string, text2: string): number {
  // dp[i][j] means the length of the ICS of
  // `text1[0..i-1]` and `text2[0..j-1]`
  const dp = Array.from(
    {
      length: text1.length + 1,
    },
    () => new Array(text2.length + 1).fill(0),
  )

  let result = 0

  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
      result = Math.max(dp[i][j], result)
    }
  }

  return result
}
