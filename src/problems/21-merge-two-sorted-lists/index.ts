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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let ptr1 = list1
  let ptr2 = list2

  const dummyHead = new ListNode()
  let curr = dummyHead
  while (ptr1 && ptr2) {
    if (ptr1.val <= ptr2.val) {
      curr.next = ptr1
      ptr1 = ptr1.next
    } else {
      curr.next = ptr2
      ptr2 = ptr2.next
    }
    curr = curr.next
  }

  if (ptr1) {
    curr.next = ptr1
  } else if (ptr2) {
    curr.next = ptr2
  }

  const head = dummyHead.next

  return head
}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
