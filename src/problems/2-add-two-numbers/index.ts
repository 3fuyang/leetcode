import { strict as assert } from 'node:assert'

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const virtualHead = new ListNode()

  let currPtr: ListNode | null = virtualHead

  let ptr1 = l1
  let ptr2 = l2

  let advanced = 0
  while (ptr1 || ptr2) {
    // NOTE: Add the previous `advanced` here so that the next `advanced` is correct
    const sum = (ptr1?.val ?? 0) + (ptr2?.val ?? 0) + advanced
    advanced = sum >= 10 ? 1 : 0

    const val = sum % 10

    currPtr.next = new ListNode(val)
    currPtr = currPtr.next

    ptr1 = ptr1?.next
    ptr2 = ptr2?.next
  }

  // Handle remained advanced value
  if (advanced) {
    currPtr.next = new ListNode(advanced)
  }

  return virtualHead.next
}

// TEST BELOW

const node1 = new ListNode(2)
const node2 = new ListNode(4)
const node3 = new ListNode(3)

const node_1 = new ListNode(5)
const node_2 = new ListNode(6)
const node_3 = new ListNode(4)

node1.next = node2
node2.next = node3

node_1.next = node_2
node_2.next = node_3

assert.equal(mergeLinkedListToNum(node1), 342)

assert.equal(mergeLinkedListToNum(addTwoNumbers(node1, node_1)), 807)

function mergeLinkedListToNum(l: ListNode) {
  let result = 0

  let ptr = l
  let digits = 0
  while (ptr) {
    result += ptr.val * 10 ** digits
    digits++
    ptr = ptr.next
  }

  return result
}
