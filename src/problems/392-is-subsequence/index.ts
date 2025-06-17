// double pointer
function isSubsequence(s: string, t: string): boolean {
  let currIndex = 0

  for (let i = 0; i < t.length && currIndex < s.length; i++) {
    if (t[i] === s[currIndex]) {
      currIndex++
    }
  }

  return currIndex === s.length
}

// dp
function isSubsequenceDp(s: string, t: string): boolean {
  const dp = Array.from(
    {
      length: s.length + 1,
    },
    () => new Array(t.length + 1).fill(0),
  )

  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      if (s[i - 1] === t[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = dp[i][j - 1]
      }
    }
  }

  return dp[s.length][t.length] === s.length
}
