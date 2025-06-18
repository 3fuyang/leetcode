function minPathSum(grid: number[][]): number {
  const rows = grid.length
  const cols = grid[0].length

  // dp[i][j]: min path sum from (0, 0) to (i, j)
  // dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
  const dp: number[][] = Array.from(
    {
      length: rows,
    },
    () => Array(cols).fill(Number.POSITIVE_INFINITY),
  )

  dp[0][0] = grid[0][0]
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0]
  }
  for (let j = 1; j < cols; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }

  return dp[rows - 1][cols - 1]
}
