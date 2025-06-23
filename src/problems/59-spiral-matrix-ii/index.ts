function generateMatrix(n: number): number[][] {
  const result: number[][] = Array.from(
    {
      length: n,
    },
    () => Array(n),
  )

  let up = 0
  let right = n - 1
  let down = n - 1
  let left = 0

  const size = n ** 2
  let count = 1
  while (count <= size) {
    for (let j = left; j <= right && count <= size; j++) {
      result[up][j] = count++
    }
    up++

    for (let i = up; i <= down && count <= size; i++) {
      result[i][right] = count++
    }
    right--

    for (let j = right; j >= left && count <= size; j--) {
      result[down][j] = count++
    }
    down--

    for (let i = down; i >= up && count <= size; i--) {
      result[i][left] = count++
    }
    left++
  }

  return result
}
