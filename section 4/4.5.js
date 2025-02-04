// Задание 1

// Создайте калькулятор при помощи конструктора, new Calculator
// важность: 5
// Создайте функцию-конструктор Calculator, которая создаёт объекты с тремя методами:
//
//     read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
// sum() возвращает сумму этих свойств.
// mul() возвращает произведение этих свойств.
//     Например:
//
// let calculator = new Calculator();
// calculator.read();
//
// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );


// РЕШЕНИЕ
// function Calculator() {
//     this.read = function(a, b) {
//         this.a = a
//         this.b = b
//     }
//     this.sum = function() {
//         return this.a + this.b
//     }
//     this.mul = function() {
//         return this.a * this.b
//     }
// }
//
// let calculator = new Calculator();
//
// calculator.read(1, 1)
// console.log(calculator.sum())

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
