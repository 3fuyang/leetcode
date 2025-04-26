export function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) {
    return 0
  }

  let result = Number.NEGATIVE_INFINITY

  const charMap: Map<string, number> = new Map()

  for (let start = 0, end = 0; end < s.length; end++) {
    const char = s[end]

    if (charMap.has(char)) {
      const firstIndex = charMap.get(char)
      // important to not move start backward
      // because sometimes the duplicate might be outside
      // the current window already,
      // so we don't have to worry about duplicated by
      // those outside existing chars
      start = Math.max(start, firstIndex + 1)
    }

    result = Math.max(result, end - start + 1)
    charMap.set(char, end)
  }

  return result
}
