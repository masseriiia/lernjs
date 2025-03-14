// Минимальный стек
// Разработайте класс стека, поддерживающий операции push, pop, topи getMin.
//
// MinStack()инициализирует объект стека.
//   void push(int val)помещает элемент valв стек.
//   void pop()удаляет элемент наверху стека.
//   int top()получает верхний элемент стека.
//   int getMin()извлекает минимальный элемент в стеке.

// Решение

// class MinStack {
//   constructor() {
//     this.arr = []
//   }
//
//   /**
//    * @param {number} val
//    * @return {void}
//    */
//   push(val) {
//     this.arr.push(val)
//   }
//
//   /**
//    * @return {void}
//    */
//   pop() {
//     this.arr.pop()
//   }
//
//   /**
//    * @return {number}
//    */
//   top() {
//     return this.arr[this.arr.length - 1]
//   }
//
//   /**
//    * @return {number}
//    */
//   getMin() {
//     return Math.min(...this.arr)
//   }
// }
