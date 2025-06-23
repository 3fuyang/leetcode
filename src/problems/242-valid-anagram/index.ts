import assert from 'node:assert'
import test from 'node:test'

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false
  }

  const mapOfS: Map<string, number> = new Map()

  for (const char of s) {
    mapOfS.set(char, (mapOfS.get(char) ?? 0) + 1)
  }
  for (const char of t) {
    if (!mapOfS.has(char)) {
      return false
    }
    const count = mapOfS.get(char) as number
    if (!count) {
      return false
    }
    mapOfS.set(char, count - 1)
  }

  return true
}

test('unicode characters', () => {
  assert.strictEqual(isAnagram('🌕🌝🌒', '🌝🌒🌕'), true)
})
