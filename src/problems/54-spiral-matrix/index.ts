function spiralOrder(matrix: number[][]): number[] {
  const result: number[] = []

  if (!matrix.length) return result

  const n = matrix.length
  const m = matrix[0].length
  const size = n * m
  let up = 0
  let down = n - 1
  let left = 0
  let right = m - 1

  while (result.length < size) {
    for (let j = left; j <= right && result.length < size; j++) {
      result.push(matrix[up][j])
    }
    up++

    for (let i = up; i <= down && result.length < size; i++) {
      result.push(matrix[i][right])
    }
    right--

    for (let j = right; j >= left && result.length < size; j--) {
      result.push(matrix[down][j])
    }
    down--

    for (let i = down; i >= up && result.length < size; i--) {
      result.push(matrix[i][left])
    }
    left++
  }

  return result
}
