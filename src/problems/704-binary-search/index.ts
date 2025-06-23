function search(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2 + left)
    const val = nums[mid] as number

    if (val < target) {
      left = mid + 1
    } else if (val > target) {
      right = mid - 1
    } else {
      return mid
    }
  }

  return -1
}
