// mono stack
function trap(height: number[]): number {
  if (height.length <= 2) return 0

  const st: number[] = []
  st.push(0)
  let sum = 0

  for (let i = 1; i < height.length; i++) {
    if (height[i] < height[st[st.length - 1]]) {
      st.push(i)
    } else if (height[i] === height[st[st.length - 1]]) {
      st.pop()
      st.push(i)
    } else {
      while (st.length && height[i] > height[st[st.length - 1]]) {
        const mid = st[st.length - 1]
        st.pop()
        if (st.length) {
          const h = Math.min(height[st[st.length - 1]], height[i]) - height[mid]
          const w = i - st[st.length - 1] - 1
          sum += h * w
        }
      }
      st.push(i)
    }
  }

  return sum
}

// two pointers
function _trap(height: number[]): number {
  let left = 0
  let right = height.length - 1

  let result = 0
  let maxLeft = 0
  let maxRight = 0

  while (left <= right) {
    if (height[left] < height[right]) {
      if (height[left] > maxLeft) {
        maxLeft = height[left]
      } else {
        result += maxLeft - height[left]
      }
      left++
    } else {
      if (height[right] > maxRight) {
        maxRight = height[right]
      } else {
        result += maxRight - height[right]
      }
      right--
    }
  }

  return result
}
