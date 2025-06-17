// brute force O(n^3)
function countSubstringsBruteForce(s: string): number {
  let result = 0

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isPalindromic(s.substring(i, j))) {
        result++
      }
    }
  }

  return result
}

// dp
function countSubstrings(s: string): number {
  // dp[i][j] means if s[i..j] is palindromic
  const dp: boolean[][] = Array.from(
    {
      length: s.length,
    },
    () => new Array(s.length).fill(false),
  )

  let result = 0

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i; j < s.length; j++) {
      if (s[i] === s[j]) {
        // single char for adjacent chars
        if (i === j || i + 1 === j) {
          dp[i][j] = true
          result++
        } else {
          dp[i][j] = dp[i + 1][j - 1]
          if (dp[i][j]) {
            result++
          }
        }
      }
    }
  }

  return result
}

function isPalindromic(s: string): boolean {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) {
      return false
    }
  }

  return true
}
