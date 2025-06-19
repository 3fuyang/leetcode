/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 *
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: _Node | null): _Node | null {
  const clonedMap: WeakMap<_Node, _Node> = new WeakMap()
  const dummyHead = new _Node()

  let curr = head
  let cpyPtr = dummyHead
  while (curr) {
    const cloned = clonedMap.get(curr) ?? new _Node(curr.val, undefined)
    if (!clonedMap.has(curr)) {
      clonedMap.set(curr, cloned)
    }

    if (curr.random) {
      let clonedRandom = clonedMap.get(curr.random)
      if (!clonedRandom) {
        clonedRandom = new _Node(curr.random.val)
        clonedMap.set(curr.random, clonedRandom)
      }
      cloned.random = clonedRandom
    }
    cpyPtr.next = cloned

    cpyPtr = cpyPtr.next
    curr = curr.next
  }

  return dummyHead.next
}

class _Node {
  val: number
  next: _Node | null
  random: _Node | null

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}
