function longestPalindrome(s: string): string {
  // dp[i][j]: `true` if s[i..j] is palindromic, `false` otherwise
  // if s[i] === s[j]:
  //   dp[i][j] = dp[i + 1][j - 1]
  // else:
  //   dp[i][j] = false
  const dp: boolean[][] = Array.from(
    {
      length: s.length,
    },
    () => Array(s.length).fill(false),
  )

  let left = 0
  let right = 0
  let maxLen = 0

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        if (j - i <= 2) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }
      if (dp[i][j]) {
        const curLen = j - i + 1
        if (curLen > maxLen) {
          maxLen = curLen
          left = i
          right = j
        }
      }
    }
  }

  return s.substring(left, right + 1)
}
