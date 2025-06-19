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

function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head

  while (fast?.next) {
    fast = fast.next.next
    slow = (slow as ListNode).next

    if (fast === slow) {
      return true
    }
  }

  return false
}

// hash table
function _hasCycle(head: ListNode | null): boolean {
  const nodeSet = new Set<ListNode>()

  let curr = head
  while (curr) {
    if (nodeSet.has(curr)) {
      return true
    }
    nodeSet.add(curr)
    curr = curr.next
  }

  return false
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
