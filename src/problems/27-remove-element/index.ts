// O(n) time complexity
function removeElement(nums: number[], val: number): number {
  let writeIndex = 0

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== val) {
      nums[writeIndex++] = nums[readIndex] as number
    }
  }

  return writeIndex
}

// n square solution
function _removeElement(nums: number[], val: number): number {
  let len = nums.length

  for (let i = 0; i < len; ) {
    if (nums[i] === val) {
      for (let j = i; j < len; j++) {
        nums[j] = nums[j + 1] as number
      }
      len--
      continue
    }
    i++
  }

  return len
}
