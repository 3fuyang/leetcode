function groupAnagrams(strs: string[]): string[][] {
  const map: Map<string, string[]> = new Map()
  for (const s of strs) {
    // sorting is the point
    const t = s.split('').sort().join('')
    const a = map.get(t)
    map.set(t, a ? [...a, s] : [s])
  }
  const anagrams: string[][] = []
  for (const a of map.values()) {
    anagrams.push(a)
  }
  return anagrams
}
