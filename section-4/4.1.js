// Задание 1

// Привет, object
// важность: 5
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.

// РЕШЕНИЕ

// const user = {}
// user.name = 'John'
// user.surname = 'Smith'
// user.name = 'Pete'
// delete user.name

// Задание 2

// Проверка на пустоту
// важность: 5
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
//
//     Должно работать так:
//
//     let schedule = {};
//
// alert( isEmpty(schedule) ); // true
//
// schedule["8:30"] = "get up";
//
// alert( isEmpty(schedule) ); // false

// РЕШЕНИЕ

// let schedule = {}
//
// function isEmpty(obj) {
//     for (key in obj) {
//         return true
//     }
//     return false
// }
//
// console.log(isEmpty(schedule))
//
// schedule["8:30"] = "get up";
//
// console.log(isEmpty(schedule))


// Задание 3

// Объекты-константы?
//     важность: 5
// Можно ли изменить объект, объявленный с помощью const? Как вы думаете?
//
// const user = {
//     name: "John"
// };
//
// // это будет работать?
// user.name = "Pete";


// Решение

// Изменить можно! Так const защищает саму переменную от изменений


// Задание 4

// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:
//
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
//
// Если объект salaries пуст, то результат должен быть 0.


// РЕШЕНИЕ

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// function calcSalaries(obj) {
//     let sum = 0
//     for (let salariesKey in salaries) {
//         sum += salaries[salariesKey]
//     }
//     return sum
// }
//
// console.log(calcSalaries(salaries)) // 390



// Задание 5

// Умножаем все числовые свойства на 2
// важность: 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
//
// Например:
//
// // до вызова функции
//     let menu = {
//         width: 200,
//         height: 300,
//         title: "My menu"
//     };
//
// multiplyNumeric(menu);
//
// // после вызова функции
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
//
//     P.S. Используйте typeof для проверки, что значение свойства числовое.


// Решение

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
//
// function multiplyNumeric(menu) {
//     for (let menuKey in menu) {
//         if (typeof menu[menuKey] === 'number') {
//             menu[menuKey] *= 2
//         }
//     }
//     return menu
// }
//
// console.log(multiplyNumeric(menu))
