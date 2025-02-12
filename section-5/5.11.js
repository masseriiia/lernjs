// Задание 1

// Создайте дату
// важность: 5
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
//
// Для вывода используйте alert.

// Решение

// const now = new Date(2012, 1, 20, 3, 12)
// console.log(now)


// Задание 2

// Покажите день недели
// важность: 5
// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
//
// Например:

//     let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );


// Решение

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
//
// function getWeekDay(date) {
//     switch (date.getDay()) {
//         case 1:
//             return 'ПН'
//             break
//         case 2:
//             return 'ВТ'
//             break
//         case 3:
//             return 'СР'
//             break
//         case 4:
//             return 'ЧТ'
//             break
//         case 5:
//             return 'ПТ'
//             break
//         case 6:
//             return 'СБ'
//             break
//         case 6:
//             return 'ВС'
//             break
//     }
// }
//
// console.log( getWeekDay(date) );
