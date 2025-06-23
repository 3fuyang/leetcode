function minSubArrayLen(target: number, nums: number[]): number {
  let result = Number.POSITIVE_INFINITY
  let sum = 0
  let i = 0
  let subLen = 0

  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      subLen = j - i + 1
      result = Math.min(result, subLen)
      sum -= nums[i++]
    }
  }

  return result === Number.POSITIVE_INFINITY ? 0 : result
}
