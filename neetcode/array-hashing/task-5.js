// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.
//
// The test cases are generated such that the answer is always unique.
//
// You may return the output in any order.
//
// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2
//
// Output: [2,3]

// Решение


class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const obj = {}
    const arr = []

    for (let i = 0; i < nums.length; i++) {
     if (!obj[nums[i]]) {
       obj[nums[i]] = 1
     } else {
       obj[nums[i]]++
     }
    }

    for (const element in obj) {
      arr.push([element, obj[element]])
    }

    arr.sort((a, b) => b[1] - a[1])

    return arr.slice(0, k).map(el => Number(el[0]))
  }
}

const solution = new Solution()

console.log(solution.topKFrequent([1,2,2,3,3,3], 2))
console.log(solution.topKFrequent([7,7], 1))
console.log(solution.topKFrequent([1,1,1,2,2,3], 2))

