// Задание 1

// Деструктурирующее присваивание
// важность: 5
// У нас есть объект:
//
//     let user = {
//         name: "John",
//         years: 30
//     };
// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name.
//     свойство years присвоит в переменную age.
//     свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:
//
//     let user = { name: "John", years: 30 };
//
// // ваш код должен быть с левой стороны:
// // ... = user
//
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// Решение

// let user = {
//     name: "John",
//     years: 30
// };
//
// const {name, years, isAdmin = false} = user
//
// console.log(name)
// console.log(years)
// console.log(isAdmin)


// Задание 2

// Максимальная зарплата
// важность: 5
// У нас есть объект salaries с зарплатами:
//
//     let salaries = {
//         "John": 100,
//         "Pete": 300,
//         "Mary": 250
//     };
// Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
//
//     Если объект salaries пустой, то нужно вернуть null.
//     Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
//     P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.


// Решение
//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Danil": 300,
//     "Mary": 250
// };
//
// function topSalary(salaries) {
//     const arrSalaries = Object.entries(salaries)
//     if (arrSalaries.length === 0) return false
//     let count = 0
//     let nameSalary = ''
//     for (const [name, num] of arrSalaries) {
//         if (count < num) {
//             count = num
//             nameSalary = name
//         }
//     }
//     return nameSalary
// }
//
// console.log(topSalary(salaries))
