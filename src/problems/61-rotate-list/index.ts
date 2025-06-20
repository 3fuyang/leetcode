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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return null
  }

  let size = 1
  let curr = head
  while (curr.next) {
    size++
    curr = curr.next
  }
  // construct the circular linked list
  curr.next = head

  const actualK = k % size
  curr = head
  // where to break the ring?
  for (let i = 0; i < size - actualK - 1; i++) {
    // iterate from the head until where to detach the link
    curr = curr.next as ListNode
  }
  // store the new head
  const result = curr.next
  curr.next = null

  return result
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
