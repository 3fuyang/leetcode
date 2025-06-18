function isInterleave(s1: string, s2: string, s3: string): boolean {
  if (s1.length + s2.length !== s3.length) {
    return false
  }

  // dp[i][j] means if s3[0..i + j] could be interleaved by s1[0..i-1] and s2[0..j-1]
  // if s1[i], s2[j] can be interleaved to s3[i + j, i + j + 2]:
  //   dp[i][j] = pick s1[i - 1] || pick s2[j - 1]
  const dp: boolean[][] = Array.from(
    {
      length: s1.length + 1,
    },
    () => Array(s2.length + 1).fill(false),
  )

  dp[0][0] = true

  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1]
  }
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1]
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1])
    }
  }

  return dp[s1.length][s2.length]
}
