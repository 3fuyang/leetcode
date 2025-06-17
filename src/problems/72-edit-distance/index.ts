function minDistance(word1: string, word2: string): number {
  const dp = Array.from(
    {
      length: word1.length + 1,
    },
    () => new Array(word2.length + 1).fill(0),
  )

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i
  }
  for (let j = 0; j <= word2.length; j++) {
    dp[0][j] = j
  }

  // horse
  // ros
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(
          // delete, insert
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          // replace
          dp[i - 1][j - 1] + 1,
        )
      }
    }
  }

  return dp[word1.length][word2.length]
}
