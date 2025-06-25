function topKFrequent(nums: number[], k: number): number[] {
  /** A reversed map */
  const bucket: number[][] = Array(nums.length + 1)
  const frequencyMap: Map<number, number> = new Map()

  for (const n of nums) {
    frequencyMap.set(n, (frequencyMap.get(n) ?? 0) + 1)
  }

  for (const key of frequencyMap.keys()) {
    const frequency = frequencyMap.get(key) as number
    if (!bucket[frequency]) {
      bucket[frequency] = []
    }
    bucket[frequency].push(key)
  }

  const result: number[] = []

  // traverse bucket in reverse order
  for (let pos = bucket.length - 1; pos >= 0 && result.length < k; pos--) {
    if (bucket[pos]) {
      result.push(...bucket[pos])
    }
  }

  return result
}

// O(n * log(n))
function _topKFrequent(nums: number[], k: number): number[] {
  const map = new MyMap()

  for (const num of nums) {
    map.push(num)
  }

  return map.topK(k)
}

class MyMap {
  #hashmap: Map<number, number> = new Map()

  push(val: number) {
    this.#hashmap.set(val, (this.#hashmap.get(val) ?? 0) + 1)
  }

  topK(k: number): number[] {
    const sorted = Array.from(this.#hashmap.entries()).sort(
      (a, b) => b[1] - a[1],
    )

    return sorted.slice(0, k).map(([num]) => num)
  }
}
