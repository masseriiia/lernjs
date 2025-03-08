// Two Sum
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
//
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
//
// Example 1:
//
// Input: strs = ["act","pots","tops","cat","stop","hat"]
//
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

// Решение

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const arr = []
    for (let i = 0; i < strs.length; i++) {
      const target = strs[i].split("").sort().join("")
      if (!arr[target]) {
        arr[target] = [strs[i]]
      } else {
        arr[target].push(strs[i])
      }
    }
    return Object.values(arr)
  }
}

const solution = new Solution()

console.log(solution.groupAnagrams(["act","pots","tops","cat","stop","hat"]))
