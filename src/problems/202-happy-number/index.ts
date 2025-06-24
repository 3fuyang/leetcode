function isHappy(n: number): boolean {
  let sum = n
  const sumSet: Set<number> = new Set()

  while (true) {
    const digits = sum.toString()
    sum = 0
    for (const d of digits) {
      sum += Number(d) ** 2
    }
    if (sum === 1) {
      return true
    }
    // NOTE: encountering same sum (other than 1) means
    // the number is not happy (dead loop)
    if (sumSet.has(sum)) {
      break
    }
    sumSet.add(sum)
  }

  return false
}
