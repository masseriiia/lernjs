// Минимальный стек
// Вам дан массив строк tokens, представляющий собой допустимое арифметическое выражение в обратной польской записи .
//
//   Верните целое число, представляющее оценку выражения.
//
//   Операндами могут быть целые числа или результаты других операций.
//   Операторы включают в себя '+', '-', '*', и '/'.
//   Предположим, что деление целых чисел всегда приводит к нулю.

// Решение

class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    const stack = []

    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/")  {
        const res1 = stack.pop()
        const res2 = stack.pop()

        if (tokens[i] === "+") {
          const res = res2 + res1
          stack.push(res)
        }
        if (tokens[i] === "-") {
          const res = res2 - res1
          stack.push(res)
        }
        if (tokens[i] === "*") {
          const res = res2 * res1
          stack.push(res)
        }
        if (tokens[i] === "/") {
          const res = Math.trunc(res2 / res1)
          stack.push(res)
        }
      } else {
        stack.push(Number(tokens[i]))
      }
    }
    return stack.pop()
  }
}

