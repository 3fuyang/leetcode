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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode()
  dummyHead.next = head

  let fast = dummyHead
  let slow = dummyHead

  let count = 0
  while (count <= n) {
    fast = fast.next
    count++
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }

  // delete
  slow.next = slow.next.next

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
