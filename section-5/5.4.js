// Задание 1

// Скопирован ли массив?
// важность: 3
// Что выведет следующий код?
//
// let fruits = ["Яблоки", "Груша", "Апельсин"];
//
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//
// // что в fruits?
// alert( fruits.length ); // ?

// РЕШЕНИЕ

// Ответ 4



// Задание 2

// Операции с массивами
// важность: 5
// Давайте произведём 5 операций с массивом.
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте Рэп и Регги в начало массива.
//     Массив по ходу выполнения операций:
//
//     Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

// Решение

// const styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл')
// styles[Math.floor(styles.length / 2)] = 'Классика'
// let res = styles.pop()
// styles.unshift('Реп', 'Регги')
//
// console.log(styles)


// Задание 3

// Вызов в контексте массива
// важность: 5
// Каков результат? Почему?
//
//     let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// });
//
// arr[2](); // ?

// ОТВЕТ: a, b, function // ПОДСМОТРЕЛ РЕШЕНИЕ


// Задание 4

// Подмассив наибольшей суммы
// важность: 2
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
//
//     Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
//     Функция getMaxSubSum(arr) должна возвращать эту сумму.
//
//     Например:
//
// getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
// getMaxSubSum([2, -1, 2, 3, -9]) == 6
// getMaxSubSum([-1, 2, 3, -9, 11]) == 11
// getMaxSubSum([-2, -1, 1, 2]) == 3
// getMaxSubSum([100, -9, 2, -3, 5]) == 100
// getMaxSubSum([1, 2, 3]) == 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

