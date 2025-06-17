// brute force
function longestPalindromeSubseqBruteForce(s: string): number {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindromic(s.substring(i, j + 1))) {
        result = Math.max(result, j - i + 1)
      }
    }
  }

  return result
}

function longestPalindromeSubseq(s: string): number {
  // dp[i][j] means the length of the longest palindromic subsequence
  // in s[i..j]
  // if s[i] === s[j]
  // dp[i][j] = dp[i + 1][j - 1] + 2
  // else
  // dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
  const dp = Array.from(
    {
      length: s.length,
    },
    () => new Array(s.length).fill(0),
  )

  // let result = 0
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
      // result = Math.max(result, dp[i][j])
    }
  }

  return dp[0][s.length - 1]
}

function isPalindromic(s: string): boolean {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) {
      return false
    }
  }

  return true
}
