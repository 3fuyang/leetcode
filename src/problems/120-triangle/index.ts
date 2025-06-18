export function minimumTotal(triangle: number[][]): number {
  // dp[i][j] means the minimum path sum from top to triangle[i][j]
  // dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
  const dp = Array.from(
    {
      length: triangle.length,
    },
    () => new Array(triangle.length).fill(Number.POSITIVE_INFINITY),
  )

  dp[0][0] = triangle[0][0]
  for (let i = 1; i < triangle.length; i++) {
    dp[i][0] = dp[i - 1][0] + triangle[i][0]
  }

  for (let i = 1; i < triangle.length; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j]
    }
  }

  let result = Number.POSITIVE_INFINITY
  for (const sum of dp[triangle.length - 1]) {
    result = Math.min(result, sum)
  }

  return result
}
