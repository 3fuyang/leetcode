function wordPattern(pattern: string, s: string): boolean {
  // Time: O(N), Space: O(N)
  const words = s.split(' ')

  if (words.length !== pattern.length) {
    return false
  }

  // Space: O(2 * N)
  const wordValueMap: Map<string, number> = new Map()
  const charValueMap: Map<string, number> = new Map()

  // Time: O(N)
  for (let i = 0; i < pattern.length; i++) {
    if (wordValueMap.get(words[i]) !== charValueMap.get(pattern[i])) {
      return false
    }
    wordValueMap.set(words[i], i)
    charValueMap.set(pattern[i], i)
  }

  return true
}
