function removeDuplicates(nums: number[]): number {
  let slow = 1
  let fast = 1

  let count = 1

  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast]
      count = 1
    } else {
      count++

      if (count <= 2) {
        nums[slow++] = nums[fast]
      }
    }

    fast++
  }

  return slow
};