function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length
  const cols = matrix[0].length
  // dp[i][j]: side of the largest square containing only `1`s
  // consisting of matrix[i][j] as a vertex
  // if matrix[i][j] === "1" and it's surrounded by "1":
  //   dp[i][j] = min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1
  const dp: number[][] = Array.from(
    {
      length: rows,
    },
    () => Array(cols).fill(0),
  )

  // stores in another variable since
  // dp[rows - 1][cols - 1] is not the maximum length
  let maxSide = 0

  for (let i = 0; i < rows; i++) {
    dp[i][0] = matrix[i][0] === '1' ? 1 : 0
    maxSide = Math.max(dp[i][0], maxSide)
  }
  for (let j = 1; j < cols; j++) {
    dp[0][j] = matrix[0][j] === '1' ? 1 : 0
    maxSide = Math.max(dp[0][j], maxSide)
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
      maxSide = Math.max(maxSide, dp[i][j])
    }
  }

  return maxSide ** 2
}
