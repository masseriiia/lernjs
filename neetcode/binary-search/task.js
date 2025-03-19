class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0
    let right = nums.length - 1
    let mid

    while (left <= right) {
      mid = Math.round((left + right) / 2)

      if (nums[mid] === target) {
        return mid
      }else if (nums[mid] > target) {
        right -= 1
      } else {
        left += 1
      }
    }

    return -1
  }
}

const solution = new Solution()

console.log(solution.search([-1,0,2,4,6,8], 4))
