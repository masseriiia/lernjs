// Задание 1

// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
//
// ucFirst("вася") == "Вася";

// Решение

// function ucFirst(name) {
//     return name[0].toUpperCase() + name.slice(1)
// }
//
// console.log(ucFirst('вася') == 'Вася')

// Задание 2

// Усечение строки
// важность: 5
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
//
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//
// Например:
//
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
//
// truncate("Всем привет!", 20) = "Всем привет!"

// Решение

// function truncate(str, maxlength) {
//     return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// console.log(truncate("Всем привет!", 20))


// Задание 3

// Проверка на спам
// важность: 5
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//
// Функция должна быть нечувствительна к регистру:
//
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// Решение

// function checkSpam(str) {
//     str = str.toLowerCase()
//     return str.includes('viagra') || str.includes('xxx') ? true : false
// }
//
// console.log(checkSpam("innocent rabbit"))


// Задание 4

// Выделить число
// важность: 4
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//
// Например:
//
// alert( extractCurrencyValue('$120') === 120 ); // true


// Решение

// function extractCurrencyValue(num) {
//     return Number(num.slice(1))
// }
//
// console.log(extractCurrencyValue('$120') === 120)
