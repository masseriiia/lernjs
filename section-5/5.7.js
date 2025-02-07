// Задание 1

// Фильтрация уникальных элементов массива
// важность: 5
// Допустим, у нас есть массив arr.
//
//     Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.
//
//     Например:
//
// function unique(arr) {
//     /* ваш код */
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// alert( unique(values) ); // Hare,Krishna,:-O
// P.S. Здесь мы используем строки, но значения могут быть любого типа.
//
// P.P.S. Используйте Set для хранения уникальных значений.

// Решение

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// function unique(arr) {
//     return Array.from(new Set(arr))
// }
//
// console.log(unique(values))


// Задание 2

// Отфильтруйте анаграммы
// важность: 4
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
//     Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
//     Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.


// Решение

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aclean(arr) {
//     const map = new Map()
//     for (let i = 0; i < arr.length; i++) {
//         let sorted = arr[i].split('').sort().join('').toLowerCase()
//         map.set(sorted, arr[i])
//     }
//     return Array.from(map.values())
// }
//
// console.log(aclean(arr)) // Решение с подсказкой
