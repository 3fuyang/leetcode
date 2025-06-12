function wordBreak(s: string, wordDict: string[]): boolean {
  // dp[j] means if `s` of length `j` can be segmented into
  // a space-separated sequence of dictionaries words
  // from `wordDict`
  // dp[j] = dp[j] || (dp[j - wordDict[i].length] && wordDict[i] === subStrEndingWith`wordDict[i]`)
  const dp: boolean[] = new Array(s.length + 1).fill(false)
  dp[0] = true // IMPORTANT

  // permutations
  for (let i = 0; i <= s.length; i++) {
    for (let j = 0; j < wordDict.length; j++) {
      if (wordDict[j].length <= i) {
        dp[i] ||=
          dp[i - wordDict[j].length] &&
          wordDict[j] === s.substring(i - wordDict[j].length, i)
      }
    }
  }

  return dp[s.length]
}
