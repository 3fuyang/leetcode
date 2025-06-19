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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const valCountMap: Map<number, number> = new Map()

  let curr = head
  while (curr) {
    const count = valCountMap.get(curr.val)
    if (typeof count === 'number') {
      valCountMap.set(curr.val, count + 1)
    } else {
      valCountMap.set(curr.val, 1)
    }
    curr = curr.next
  }

  const dummy = new ListNode()
  dummy.next = head
  curr = head
  let prev = dummy
  while (curr) {
    const count = valCountMap.get(curr.val)
    if (count && count > 1) {
      // delete
      prev.next = curr.next
      curr = prev.next
      continue
    }
    prev = curr
    curr = curr.next
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
