function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Hashmap: boolean[] = Array(1001).fill(false)
  const result: number[] = []

  for (const num of nums1) {
    nums1Hashmap[num] = true
  }

  for (const num of nums2) {
    if (nums1Hashmap[num]) {
      result.push(num)
      nums1Hashmap[num] = false
    }
  }

  return result
}
