class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let top = 0
    let bottom = matrix.length - 1

    while (top <= bottom) {
      let mid = Math.floor((top + bottom) / 2)

      if (matrix[mid][0] === target) {
        return true
      } else if (matrix[mid][0] > target) {
        bottom = mid - 1
      } else {
        top = mid + 1
      }
    }

    let row = bottom
    if (row < 0) return false

    let left = 0
    let right = matrix[row].length


    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (matrix[row][mid] === target) {
        return true
      } else if(matrix[row][mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    return false
  }
}

const solution = new Solution()

console.log(solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10))
console.log(solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 20))
console.log(solution.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(solution.searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))
