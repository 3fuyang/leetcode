class MyQueue {
  #stackIn: number[] = []
  #stackOut: number[] = []

  push(x: number): void {
    this.#stackIn.push(x)
  }

  pop(): number {
    if (this.#stackOut.length) {
      const val = this.#stackOut.pop() as number
      return val
    }
    while (this.#stackIn.length) {
      this.#stackOut.push(this.#stackIn.pop() as number)
    }
    return this.#stackOut.pop() as number
  }

  peek(): number {
    if (this.#stackOut.length) {
      const val = this.#stackOut.at(this.#stackOut.length - 1) as number
      return val
    }
    while (this.#stackIn.length) {
      this.#stackOut.push(this.#stackIn.pop() as number)
    }
    return this.#stackOut.at(this.#stackOut.length - 1) as number
  }

  empty(): boolean {
    return !(this.#stackIn.length + this.#stackOut.length)
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
