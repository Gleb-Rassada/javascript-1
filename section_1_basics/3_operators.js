// операторы присваивания
let age = 18;
age += 5; // age = age + 2
age++;
console.log(age);

// Операторы сравнения
const vasya = 20;
console.log(age > vasya); //true
console.log(age >= vasya); //true
console.log(age == vasya); //false
console.log(age < vasya); //false
console.log("-----------------------");
//порядок операторов
const isSuited = 100 - 10 > 90 - 5;
// 100 -(12) 10 >(10) 90 -(12) 5
// в скобочках расставил приоритеты
// операторы с большим значением приоритета выполняются в первую очереди
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_precedence
console.log(isSuited);

let a;
let b;
c = b = 100 + 150 + 30;

console.log(c);
console.log(b);
console.log("-----------------------");
