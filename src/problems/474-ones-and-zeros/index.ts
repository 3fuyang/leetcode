export function findMaxForm(strs: string[], m: number, n: number): number {
  // dp[i][j] = dp[i - numOfZeros][j - numOfOnes] + 1
  const dp = Array.from(
    {
      length: m + 1,
    },
    () => new Array(n + 1).fill(0),
  )

  // Iterate items
  for (const str of strs) {
    const [numOfZeros, numOfOnes] = numOfZerosAndOnes(str)

    // Iterate sub-knapsacks (rolling array)
    for (let i = m; i >= numOfZeros; i--) {
      for (let j = n; j >= numOfOnes; j--) {
        dp[i][j] = Math.max(dp[i - numOfZeros][j - numOfOnes] + 1, dp[i][j])
      }
    }
  }

  return dp[m][n]
}

function numOfZerosAndOnes(str: string) {
  let numOfZeros = 0
  let numOfOnes = 0

  for (const ch of str) {
    if (ch === '0') {
      numOfZeros++
    } else {
      numOfOnes++
    }
  }

  return [numOfZeros, numOfOnes] as const
}
