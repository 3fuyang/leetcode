class Node {
  key: number | null
  val: number | null
  prev: Node | null
  next: Node | null

  constructor(key?: number, val?: number, prev?: Node, next?: Node) {
    this.key = key ?? null
    this.val = val ?? null
    this.prev = prev ?? null
    this.next = next ?? null
  }
}

class LRUCache {
  /** [1, 3000] */
  capacity: number
  #cache: Map<number, Node> = new Map()
  /** dummy node pointing right to LRU */
  #left: Node = new Node()
  /** dummy node pointing left to most recently used node */
  #right: Node = new Node()

  constructor(capacity: number) {
    this.capacity = capacity

    this.#left.next = this.#right
    this.#right.prev = this.#left
  }

  get(key: number): number {
    if (this.#cache.has(key)) {
      const node = this.#cache.get(key) as Node
      this.#remove(node)
      this.#insert(node)
      return node.val as number
    }
    return -1
  }

  put(key: number, value: number): void {
    // delete the node first
    if (this.#cache.has(key)) {
      this.#remove(this.#cache.get(key) as Node)
    }
    // insert as the most recently used, and update the cache
    const node = new Node(key, value)
    this.#insert(node)
    this.#cache.set(key, node)

    // delete the LRU if exceeding the capacity and evict it from the cache
    if (this.#cache.size > this.capacity) {
      const lru = this.#left.next as Node
      this.#remove(lru)
      this.#cache.delete(lru.key as number)
    }
  }

  /** insert node at right */
  #insert(node: Node) {
    const prev = this.#right.prev as Node
    const next = this.#right

    node.next = next
    next.prev = node
    prev.next = node
    node.prev = prev
  }

  /** remove node from list */
  #remove(node: Node) {
    const prev = node.prev as Node
    const next = node.next as Node

    prev.next = next
    next.prev = prev
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
