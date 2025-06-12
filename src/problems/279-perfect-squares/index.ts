const memoPsn = getMemoPsn()

export function numSquares(n: number): number {
  // backpack problem
  // items: perfect square numbers (dynamic)
  // volumes: `n`

  // dp[i] means the least number of perfect square numbers
  // that sum to `i`
  // dp[j] = Math.min(dp[j - psn(i) + 1, dp[j]])
  const dp = new Array(n + 1).fill(Number.POSITIVE_INFINITY)
  dp[0] = 0

  const itemLimit = Math.floor(Math.sqrt(n))
  for (let i = 1; i <= itemLimit; i++) {
    for (let j = memoPsn(i); j <= n; j++) {
      dp[j] = Math.min(dp[j - memoPsn(i)] + 1, dp[j])
    }
  }

  return dp[n]
}

function getMemoPsn() {
  const psnMap: number[] = []

  return (i: number): number => {
    if (psnMap[i]) {
      return psnMap[i]
    }
    const n = i ** 2
    psnMap[i] = n
    return n
  }
}
