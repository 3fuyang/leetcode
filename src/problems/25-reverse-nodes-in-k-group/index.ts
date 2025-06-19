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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // two loops
  // the outer checks if no less than `k` nodes remains in the list
  // the inner reverses the group of `k` nodes
  const dummy = new ListNode()
  dummy.next = head

  let scanned = 0
  /** The node right before the group of `k` nodes that's going to be reversed */
  let pre = dummy // the initialization here is unnecessary and only for type correctness
  let curr: ListNode | null = dummy
  while (curr) {
    if (scanned === 0) {
      pre = curr
    }
    if (scanned === k) {
      // reversion
      const start = pre.next as ListNode
      let then = start.next as ListNode
      for (let i = 0; i < k - 1; i++) {
        start.next = then.next
        then.next = pre.next
        pre.next = then
        then = start.next as ListNode
      }
      // update curr!
      curr = start
      scanned = 0
    } else {
      scanned++
      curr = curr.next
    }
  }

  return dummy.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
