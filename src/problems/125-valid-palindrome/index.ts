function isPalindrome(s: string): boolean {
  let left = 0
  let right = s.length - 1

  while (left < right) {
    if (!/[\da-zA-Z]/.test(s[left])) {
      left++
      continue
    }
    if (!/[\da-zA-Z]/.test(s[right])) {
      right--
      continue
    }

    if (s[left].toLowerCase() !== s[right].toLocaleLowerCase()) {
      return false
    }

    left++
    right--
  }

  return true
}
