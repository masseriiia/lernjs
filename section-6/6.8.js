// Задание 1

// Напиши функцию printNumbers(from, to), которая последовательно выводит в консоль числа от from до to с интервалом в 1 секунду.
//     Реализуй два варианта:
//
// Используя setInterval.
// Используя рекурсивный setTimeout.

// Решение

// function printNumbers(from, to) {
//   let current = from
//
//   function next() {
//     if (current < to) {
//       console.log(current)
//       current++
//       setTimeout(next, 1000)
//     }
//   }
//   next()
// }
// printNumbers(0, 10)


// Задание 2

// Задача 2: Остановка интервала
// Напиши код, который запускает setInterval, выводящий в консоль "Тик!" раз в 500 мс.
//   Через 5 секунд выполнение setInterval должно остановиться.

// let timerId = setInterval(() => console.log("Tik!"), 500)
//
// setTimeout(() => clearInterval(timerId), 5000)


