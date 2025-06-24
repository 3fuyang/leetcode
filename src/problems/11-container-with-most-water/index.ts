function maxArea(height: number[]): number {
  let result = 0

  // two pointers
  let left = 0
  let right = height.length - 1

  while (left < right) {
    // the amount of rains is equivalent to the area
    result = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      result,
    )

    if (height[left] <= height[right]) {
      left++
    } else {
      right--
    }
  }

  return result
}
