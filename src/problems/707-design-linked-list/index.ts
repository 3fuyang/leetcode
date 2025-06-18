interface Node {
  val: number | null
  next: Node | null
}

class MyLinkedList {
  private dummyHead: Node
  constructor() {
    this.dummyHead = {
      val: null,
      next: null,
    }
  }

  get(index: number): number {
    let curr: Node = this.dummyHead.next

    let count = 0
    while (curr && count < index) {
      curr = curr.next
      count++
    }

    if (!curr) {
      return -1
    }

    return curr.val
  }

  addAtHead(val: number): void {
    const node: Node = {
      val,
      next: null,
    }

    node.next = this.dummyHead.next
    this.dummyHead.next = node
  }

  addAtTail(val: number): void {
    const node: Node = {
      val,
      next: null,
    }

    let curr = this.dummyHead
    while (curr.next) {
      curr = curr.next
    }
    curr.next = node
  }

  addAtIndex(index: number, val: number): void {
    const node: Node = {
      val,
      next: null,
    }

    let curr = this.dummyHead
    let count = 0

    while (curr && count < index) {
      curr = curr.next
      count++
    }

    if (!curr) {
      return
    }

    const tmp = curr.next
    curr.next = node
    node.next = tmp
  }

  deleteAtIndex(index: number): void {
    let curr = this.dummyHead
    let count = 0

    while (curr && count < index) {
      curr = curr.next
      count++
    }

    if (!curr) {
      return
    }

    curr.next = curr.next?.next
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
