// sliding window
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set: Set<number> = new Set()

  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      // maintaining a `k` size sliding window and a corresponding set
      set.delete(nums[i - k - 1])
    }
    if (set.has(nums[i])) {
      return true
    }
    set.add(nums[i])
  }

  return false
}

// hashmap n^2
function _containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number[]> = new Map()

  // Time: O(n^2), Space: O(n)
  for (let i = 0; i < nums.length; i++) {
    // indices are sorted in ascending order by natural
    const indices = map.get(nums[i]) ?? []
    indices.push(i)
    map.set(nums[i], indices)
    if (checkContainsNearbyDuplicate(indices, k)) {
      return true
    }
  }

  return false
}

function checkContainsNearbyDuplicate(indices: number[], k: number): boolean {
  if (indices.length === 1) {
    return false
  }

  for (let l = 0; l < indices.length - 1; l++) {
    // satisfied duplicates must happen in nearby indices first
    if (indices[l + 1] - indices[l] <= k) {
      return true
    }
  }

  return false
}
