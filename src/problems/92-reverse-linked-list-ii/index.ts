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

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number,
): ListNode | null {
  const dummyHead = new ListNode()
  dummyHead.next = head

  let base = dummyHead
  for (let i = 0; i < left - 1; i++) {
    base = base.next as ListNode
  }

  const start = base.next as ListNode
  let then = start.next as ListNode

  for (let i = left; i < right; i++) {
    start.next = then.next
    then.next = base.next
    base.next = then
    then = start.next as ListNode
  }

  return dummyHead.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
