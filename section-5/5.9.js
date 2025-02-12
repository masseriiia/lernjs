// Задание 1

// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
//
//     Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
//
//     Если объект salaries пуст, то результат должен быть 0.
//
// Например:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
//
// alert( sumSalaries(salaries) ); // 650


// Решение

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((acc, item) => acc + item, 0)
// }
//
// console.log(sumSalaries(salaries))



// Задание 2

// Подсчёт количества свойств объекта
// важность: 5
// Напишите функцию count(obj), которая возвращает количество свойств объекта:
//
//     let user = {
//         name: 'John',
//         age: 30
//     };
//
// alert( count(user) ); // 2
// Постарайтесь сделать код как можно короче.
//
// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».


// Решение

// let user = {
//     name: 'John',
//     age: 30
// };
//
// function count(obj) {
//     return Object.entries(obj).length
// }
//
// console.log(count(user)); // 2
