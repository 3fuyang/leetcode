function uniquePaths(m: number, n: number): number {
  // dp[i][j] means the number of unique paths to reach (i, j)
  // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  const dp: number[][] = Array.from({ length: m }, () => [])

  // init the left and top edges
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}
