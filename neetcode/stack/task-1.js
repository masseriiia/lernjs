// Допустимые скобки
// Решено
// Вам дана строка, состоящая sиз следующих символов: '(', ')', '{', и .'}''['']'
//
// Входная строка s действительна тогда и только тогда, когда:
//
// Каждая открывающаяся скобка закрывается закрывающейся скобкой того же типа.
//   Открытые скобки закрываются в правильном порядке.
//   Каждой закрывающейся скобке соответствует открывающаяся скобка того же типа.
//   Верните, true если s это допустимая строка, в false противном случае.

class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const open = ['(', '{', '[']
    const close = [')', '}', ']']
    const stack = []

    for (let i = 0; i < s.length; i++) {
      if (open.includes(s[i])) {
        stack.push(s[i])
      }
      if (close.includes(s[i])) {
        if (open.indexOf(stack.pop()) !== close.indexOf(s[i])) {
          return false
        }
      }
    }
    return stack.length === 0
  }
}

const solution = new Solution()

console.log(solution.isValid("[]"))
console.log(solution.isValid("([{}])"))
console.log(solution.isValid("[(])"))
