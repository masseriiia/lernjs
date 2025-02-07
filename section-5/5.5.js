// Задание 1

// Переведите текст вида border-left-width в borderLeftWidth
// важность: 5
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
//
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
//
// Примеры:
//
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// Решение

// function camelize(str) {
//     str = str.split('-')
//     for (let i = 1; i < str.length; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1)
//     }
//     return str.join('')
// }
//
// console.log(camelize("background-color"))
// console.log(camelize("list-style-image"))
// console.log(camelize("-webkit-transition"))


// Задание 2

// Фильтрация по диапазону
// важность: 4
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
//
// Функция должна возвращать новый массив и не изменять исходный.
//
// Например:
//
// let arr = [5, 3, 8, 1];
//
// let filtered = filterRange(arr, 1, 4);
//
// alert( filtered ); // 3,1 (совпадающие значения)
//
// alert( arr ); // 5,3,8,1 (без изменений)

// Решение

// let arr = [5, 3, 8, 1];
//
// function filterRange(arr, a, b) {
//     return arr.filter((item) => a <= item && item <= 4)
// }
//
// console.log(filterRange(arr, 1, 4))


// Задание 3

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
//
//     Функция должна изменять принимаемый массив и ничего не возвращать.
//
//     Например:
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
//
// alert( arr ); // [3, 1]

// Решение
// let arr = [5, 3, 8, 1];
//
// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let val = arr[i]
//
//         if (val < a || val > b) {
//             arr.splice(i, 1)
//             i--
//         }
//     }
// }
//
// filterRangeInPlace(arr, 1, 4)
// console.log(arr)


// Задание 4

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
//
// // ... ваш код для сортировки по убыванию
//
// alert( arr ); // 8, 5, 2, 1, -10


// Решение

// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a)
//
// console.log(arr)


// Задание 5

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
//
//     Создайте функцию copySorted(arr), которая будет возвращать такую копию.
//
//     let arr = ["HTML", "JavaScript", "CSS"];
//
// let sorted = copySorted(arr);
//
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// Решение

// let arr = ["HTML", "JavaScript", "CSS"];
//
// function copySorted(arr) {
//     return [...arr].sort()
// }
//
// let sorted = copySorted(arr)
//
// console.log(sorted)
// console.log(arr)


// Задание 6

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
//
// Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
//
// let names = /* ... ваш код */
//
// alert( names ); // Вася, Петя, Маша

// Решение

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ]
//
// let names = users.map((item) => item.name)
//
// console.log(names)


// Задание 7

// Трансформировать в объекты
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
//
//     Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.
//
//     Например:
//
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = /* ... ваш код ... */
//
//     /*
//     usersMapped = [
//       { fullName: "Вася Пупкин", id: 1 },
//       { fullName: "Петя Иванов", id: 2 },
//       { fullName: "Маша Петрова", id: 3 }
//     ]
//     */
//
//     alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// Итак, на самом деле вам нужно трансформировать один массив объектов в другой. Попробуйте использовать =>. Это небольшая уловка.


// Решение

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map((item) => {
//     return  {
//         fullName: item.name + " " + item.surname,
//         id: item.id
//     }
// })
//
// console.log(usersMapped)


// Задание 8

// Перемешайте массив
// важность: 3
// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
//
//     Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//
// let arr = [1, 2, 3];
//
// shuffle(arr);
// // arr = [3, 2, 1]
//
// shuffle(arr);
// // arr = [2, 1, 3]
//
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.


// Решение

// let arr = [1, 2, 3];
//
// function shuffle(arr) {
//     arr.sort(() => Math.random() - 0.5)
// }
// shuffle(arr)
// console.log(arr)

// Решил не сам(((


// Задание 9

// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
//
// Например:
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28


// Решение

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// function getAverageAge(arr) {
//     return arr.map((item) => item.age).reduce((acc, item) => (acc + item), 0) / arr.length
// }
//
// console.log(getAverageAge(arr))


// Задание 10

// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.
//
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
//
// Например:
//
// function unique(arr) {
//     /* ваш код */
// }
//
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// alert( unique(strings) ); // кришна, харе, :-O


// Решение

// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// function unique(str) {
//     const arr = []
//
//     for (let i = 0; i < str.length; i++) {
//         if (!arr.includes(str[i])) {
//             arr.push(str[i])
//         }
//     }
//
//     return arr
// }
//
// console.log(unique(strings))
