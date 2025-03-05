//Задание  1

// Создайте объект originalObject с двумя свойствами: value (число) и nested (объект с одним свойством innerValue).
// Создайте поверхностную копию этого объекта в переменную shallowCopy. Измените значение value в shallowCopy и проверьте, изменилось ли оно в оригинале.
// Затем измените innerValue внутри nested и проверьте, как это повлияло на оба объекта.

// РЕШЕНИЕ

// const originalObject = {
//     value: 123,
//     nested: {
//         innerValue: 456
//     }
// }
//
// const shallowCopy = Object.assign({}, originalObject)
//
// shallowCopy.value = 789
// shallowCopy.nested.innerValue = 123
//
// console.log(originalObject)
// console.log(shallowCopy)

// Сделав поверхностную копию, мы затронили изменения только во вложенных объектах
