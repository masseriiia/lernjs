// Продукты массива, кроме себя
// Для заданного целочисленного массива nums вернуть массив, output где output[i]— произведение всех элементов, за nums исключением nums[i].
//
// Каждый продукт гарантированно помещается в 32-битное целое число.
//
// Пример 1:
//
// Input: nums = [1,2,4,6]
//
// Output: [48,24,12,8]

// Решение

class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    const arr = []
    let count = 1
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) {
          continue
        }
        count *= nums[j]
      }
      arr.push(count)
      count = 1
    }
    return arr
  }
}

const solution = new Solution()

console.log(solution.productExceptSelf([1,2,4,6]))
console.log(solution.productExceptSelf([-1,0,1,2,3]))
