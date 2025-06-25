// follow-up: using only 1 queue
class MyStack {
  #queue: number[] = []

  push(x: number): void {
    this.#queue.push(x)
  }

  pop(): number {
    let size = this.#queue.length
    while (size-- > 1) {
      this.#queue.push(this.#queue.shift() as number)
    }
    return this.#queue.shift() as number
  }

  top(): number {
    const x = this.pop()
    this.push(x)
    return x
  }

  empty(): boolean {
    return !this.#queue.length
  }
}

// with 2 queues
class _MyStack {
  // 2 symmetric queues
  #queue1: number[] = []
  #queue2: number[] = []

  push(x: number): void {
    if (this.#queue1.length) {
      this.#queue1.push(x)
    } else {
      this.#queue2.push(x)
    }
  }

  pop(): number {
    // clean one of the two queues every time
    if (this.#queue1.length) {
      while (this.#queue1.length > 1) {
        this.#queue2.push(this.#queue1.shift() as number)
      }
      return this.#queue1.pop() as number
    }
    while (this.#queue2.length > 1) {
      this.#queue1.push(this.#queue2.shift() as number)
    }
    return this.#queue2.pop() as number
  }

  top(): number {
    const x = this.pop()
    this.push(x)
    return x
  }

  empty(): boolean {
    return !(this.#queue1.length + this.#queue2.length)
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
