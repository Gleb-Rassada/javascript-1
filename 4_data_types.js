// все данные в JS делятся на объекты и примитивы
// примитивы:
//

const num = 10; // числа
const forname = "Иванов"; // строки
const x = true; // значения boolean
let smth; //undefined - не заданное значение переменной
let data = null; // null в отличие от undefined задаётся руками
const admin = Symbol("Admin"); // уникальное не изменяемое значение
const big = BigInt(99999999999999);
console.log(
   num + ", " + forname + ", " + x + ", " + smth + ", " + data + ", " + big
);
