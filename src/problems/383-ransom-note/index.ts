function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineChHashmap = Array(26).fill(0)

  for (const ch of magazine) {
    magazineChHashmap[
      (ch.codePointAt(0) as number) - ('a'.codePointAt(0) as number)
    ]++
  }

  for (const ch of ransomNote) {
    if (
      magazineChHashmap[
        (ch.codePointAt(0) as number) - ('a'.codePointAt(0) as number)
      ]-- <= 0
    ) {
      return false
    }
  }

  return true
}
