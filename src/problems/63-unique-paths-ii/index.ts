export function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const m = obstacleGrid.length
  // `m` and `n` are constrained to be not less than 1
  const n = obstacleGrid[0].length

  // dp[i][j] means the possible ways to reach cell (i, j)
  const dp: number[][] = Array.from({ length: m }, () => Array.from({ length: n }, () => 0))

  // initialize the top and left edge
  for (let i = 0; i < m && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  for (let j = 0; j < n && obstacleGrid[0][j] === 0; j++) {
    dp[0][j] = 1
  }

  // remaining cells
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[m - 1][n - 1]
}
