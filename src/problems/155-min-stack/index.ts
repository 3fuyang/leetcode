class Node {
  val: number
  min: number
  next: Node | null
  constructor(val: number, min: number, next: Node | null) {
    this.val = val
    this.min = min
    this.next = next
  }
}

class MinStack {
  #head: Node = new Node(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    null,
  )

  push(val: number): void {
    this.#head = new Node(val, Math.min(this.#head.min, val), this.#head)
  }

  pop(): void {
    this.#head = this.#head.next as Node
  }

  top(): number {
    return this.#head.val
  }

  getMin(): number {
    return this.#head.min
  }
}

class _MinStack {
  #min = Number.POSITIVE_INFINITY
  #st: number[] = []
  push(x: number) {
    if (x <= this.#min) {
      // only push the previous minimum value when
      // it's been updated by the entering value
      this.#st.push(this.#min)
      this.#min = x
    }
    this.#st.push(x)
  }

  pop() {
    // if pop operation could result in the changing of the current minimum value,
    // pop twice and change the current minimum value to the last minimum value.
    if (this.#st.pop() === this.#min) {
      this.#min = this.#st.pop() as number
    }
  }

  top() {
    return this.#st.at(-1) as number
  }

  getMin() {
    return this.#min
  }
}

// using 2 stacks
class __MinStack {
  #s1: number[] = []
  #s2: number[] = []

  getMin() {
    return this.#s2.at(-1) as number
  }

  push(x: number) {
    this.#s1.push(x)
    if (!this.#s2.length || this.getMin() >= x) {
      this.#s2.push(x)
    }
  }

  top() {
    return this.#s1.at(-1) as number
  }

  pop() {
    const x = this.#s1.pop()
    if (x === this.getMin()) {
      this.#s2.pop()
    }
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
