// brute force
function longestPalindromeSubseq(s: string): number {
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

function isPalindromic(s: string): boolean {
  for (let l = 0, r = s.length - 1; l < r; l++, r--) {
    if (s[l] !== s[r]) {
      return false
    }
  }

  return true
}
