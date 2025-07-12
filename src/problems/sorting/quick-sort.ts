function quickSort(arr: number[]): number[] {
  const array = [...arr]
  partition(array, 0, array.length - 1)
  return array
}

function partition(arr: number[], low: number, high: number) {
  // empty or only one element
  if (low >= high) return
  // selecting last element as the pivot
  const pivot = arr[high]

  // for swapping
  let left = low - 1

  for (let i = low; i < high; i++) {
    if (arr[i] <= pivot) {
      left++
      [arr[left], arr[i]] = [arr[i], arr[left]]
    }
  }

  const pivotIndex = left + 1;
  [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]]

  partition(arr, low, pivotIndex - 1)
  partition(arr, pivotIndex + 1, high)
}
