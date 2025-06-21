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

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) {
    return head
  }

  const dummy1 = new ListNode(0)
  const dummy2 = new ListNode(0)
  let p1 = dummy1
  let p2 = dummy2

  let curr: ListNode | null = head
  while (curr) {
    if (curr.val < x) {
      p1.next = curr
      p1 = p1.next
    } else {
      p2.next = curr
      p2 = p2.next
    }
    curr = curr.next
  }

  // concat two list
  p2.next = null
  p1.next = dummy2.next

  return dummy1.next
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
