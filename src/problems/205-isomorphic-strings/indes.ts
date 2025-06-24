function isIsomorphic(s: string, t: string): boolean {
  const ms: number[] = Array(256).fill(0)
  const mt: number[] = Array(256).fill(0)

  for (let i = 0; i < s.length; i++) {
    const indexChS = s[i].codePointAt(0) as number
    const indexChT = t[i].codePointAt(0) as number

    // the isomorphic relation is equivalent to
    // mapping two characters to the same value
    if (ms[indexChS] !== mt[indexChT]) {
      return false
    }

    // update so that the traversed characters hold unique values
    ms[indexChS] = i + 1
    mt[indexChT] = i + 1
  }

  return true
}
