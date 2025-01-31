// Постфиксная и префиксная формы

// Задание 1
// важность: 5
// Чему будут равны переменные a, b, c и d в примере ниже?
//
// let a = 1, b = 1;
//
// let c = ++a; // ?
// let d = b++; // ?

// РЕШЕНИЕ
// let c = 2
// let b = 1


// Задание 2
// Результат присваивания
// важность: 3
// Чему будут равны переменные a и x после исполнения кода в примере ниже?
//
//     let a = 2;
//
// let x = 1 + (a *= 2);

// РЕШЕНИЕ
// console.log(a) // 4
// console.log(x) // 5


// Задание 3
// Преобразование типов
// важность: 5
// Какой результат будет у выражений ниже?
//
// "" + 1 + 0
// "" - 1 + 0
// true + false
// 6 / "3"
// "2" * "3"
// 4 + 5 + "px"
// "$" + 4 + 5
// "4" - 2
// "4px" - 2
// "  -9  " + 5
// "  -9  " - 5
// null + 1
// undefined + 1
// " \t \n" - 2

// РЕШЕНИЕ

// 10
// NaN
// 1
// 2
// 6
// 9px
// $45
// 2
// -95
// -14
// hz
// hz


// Задание 4
// Исправьте сложение
// важность: 5
// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
//
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
//
// В чём ошибка? Исправьте её. Результат должен быть 3.
//
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
//
// alert(a + b); // 12

// РЕШЕНИЕ

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);
// alert(a + b); // 3

// или

// let a = Number(prompt("Первое число?", 1));
// let b = Number(prompt("Второе число?", 2));
// alert(a + b); // 3




