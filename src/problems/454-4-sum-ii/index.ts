function fourSumCount(
  nums1: number[],
  nums2: number[],
  nums3: number[],
  nums4: number[],
): number {
  let result = 0

  const sumOf12: Map<number, number> = new Map()

  const len = nums1.length

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = nums1[i] + nums2[j]
      sumOf12.set(sum, (sumOf12.get(sum) ?? 0) + 1)
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const sum = nums3[i] + nums4[j]
      const targetCount = sumOf12.get(-sum)
      if (targetCount) {
        result += targetCount
      }
    }
  }

  return result
}
