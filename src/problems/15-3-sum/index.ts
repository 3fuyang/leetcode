// two pointers
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b)

  const result: number[][] = []

  // `a` + `b` + `c` = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break
    }
    if (i && nums[i] === nums[i - 1]) {
      // deduplicate `a`
      continue
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum > 0) {
        right--
      } else if (sum < 0) {
        left++
      } else {
        result.push([nums[i], nums[left], nums[right]])

        // deduplicate `left`
        while (left < right && nums[left] === nums[left + 1]) {
          left++
        }
        // deduplicate `right`
        while (left < right && nums[right] === nums[right - 1]) {
          right--
        }

        left++
        right--
      }
    }
  }

  return result
}
