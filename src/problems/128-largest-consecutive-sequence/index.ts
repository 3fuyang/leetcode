function longestConsecutive(nums: number[]): number {
  const set: Set<number> = new Set(nums)

  let result = 0

  for (const num of set) {
    // sort of greedy, we only start counting with the possible minimal number
    if (!set.has(num - 1)) {
      let right = num + 1
      while (set.has(right)) {
        right++
      }
      result = Math.max(result, right - num)
    }
  }

  return result
}

function _longestConsecutive(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length
  }

  // Time: O(n * log(n)), Space: O(n)
  const dedupeSortedNums = Array.from(new Set(nums.sort((a, b) => a - b)))

  let result = 1
  let left = 0
  let right = 1

  // O(n)
  while (right < dedupeSortedNums.length) {
    console.log({ left, right })

    if (dedupeSortedNums[right - 1] + 1 === dedupeSortedNums[right]) {
      const width = right - left + 1
      result = Math.max(width, result)
      right++
    } else {
      left = right
      right = left + 1
    }
  }

  return result
}
