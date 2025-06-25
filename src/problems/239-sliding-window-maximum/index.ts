function maxSlidingWindow(nums: number[], k: number): number[] {
  const maxes: number[] = []

  // maintain only `num`s which are possible maximum candidates,
  // aka. promising items,
  // in descending order
  const deque = new MyDeque()

  // initialize the deque with the first window
  for (let i = 0; i < k; i++) {
    deque.push(nums[i])
  }

  let start = 0
  while (start + k - 1 < nums.length) {
    maxes.push(deque.peek())
    if (start + k < nums.length) {
      deque.pop(nums[start])
      deque.push(nums[start + k])
    }
    start++
  }

  return maxes
}

/**
 * Ascending deque
 */
class MyDeque {
  #queue: number[] = []
  peek() {
    return this.#queue.at(0) as number
  }
  pop(x: number) {
    if (this.#queue.length && x === this.peek()) {
      this.#queue.shift()
    }
  }
  push(x: number) {
    while (this.#queue.length && x > (this.#queue.at(-1) as number)) {
      this.#queue.pop()
    }
    this.#queue.push(x)
  }
}
