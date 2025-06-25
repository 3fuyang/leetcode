function isValid(s: string): boolean {
  if (s.length % 2) {
    return false
  }

  const stack: string[] = []

  for (const ch of s) {
    switch (ch) {
      case ')':
        if (stack.pop() !== '(') {
          return false
        }
        break
      case ']':
        if (stack.pop() !== '[') {
          return false
        }
        break
      case '}':
        if (stack.pop() !== '{') {
          return false
        }
        break
      default:
        stack.push(ch)
    }
  }
  // unmatched parentheses
  if (stack.length) {
    return false
  }

  return true
}
