/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// two pointers
function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head

  while (fast?.next) {
    slow = slow?.next ?? null
    fast = fast.next.next

    if (slow === fast) {
      // cycle detected
      let curr = head
      let inner = fast
      while (curr !== inner) {
        curr = curr?.next ?? null
        inner = inner?.next ?? null
      }
      return curr
    }
  }

  return null
}

// hash table
function _detectCycle(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode()
  dummyHead.next = head

  const nodeSet = new Set<ListNode>()

  let curr = dummyHead.next
  while (curr) {
    if (nodeSet.has(curr)) {
      return curr
    }
    nodeSet.add(curr)
    curr = curr.next
  }

  return null
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
