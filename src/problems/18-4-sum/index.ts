function fourSum(nums: number[], target: number): number[][] {
  // ascending
  nums.sort((a, b) => a - b)

  const result: number[][] = []

  // a + b + c + d = target
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      // deduplicate `a`
      continue
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        // deduplicate `b`
        continue
      }

      // two pointers solution similar with 2Sum-ii and 3Sum
      let left = j + 1
      let right = nums.length - 1
      while (left < right) {
        const fourSum = nums[i] + nums[j] + nums[left] + nums[right]
        if (fourSum > target) {
          right--
        } else if (fourSum < target) {
          left++
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]])

          while (left < right && nums[left] === nums[left + 1]) {
            // deduplicate `c`
            left++
          }
          while (left < right && nums[right] === nums[right + 1]) {
            // deduplicate `d`
            right--
          }

          left++
          right--
        }
      }
    }
  }

  return result
}

// backtracking
function _fourSum(nums: number[], target: number): number[][] {
  if (nums.length < 4) {
    return []
  }

  // sort to skip same items, avoiding duplications
  nums.sort()

  const result: number[][] = []

  const candidate: number[] = []
  let sum = 0
  const used = Array(nums.length).fill(false)
  const backtracking = (start = 0) => {
    if (candidate.length === 4) {
      if (sum === target) {
        result.push([...candidate])
      }
      return
    }

    for (let i = start; i < nums.length; i++) {
      if (i > 0 && nums[i - 1] === nums[i] && used[i - 1] === false) {
        continue
      }
      candidate.push(nums[i])
      sum += nums[i]
      used[i] = true
      backtracking(i + 1)
      used[i] = false
      sum -= nums[i]
      candidate.pop()
    }
  }

  backtracking()

  return result
}
