function twoSum(numbers: number[], target: number): number[] {
  // constraint: must use constant extra space
  let left = 0
  let right = numbers.length - 1

  while (left < right) {
    const twoSum = numbers[left] + numbers[right]
    if (twoSum < target) {
      left++
    } else if (twoSum > target) {
      right--
    } else {
      break
    }
  }

  // exactly one solution guaranteed
  return [left + 1, right + 1]
}
