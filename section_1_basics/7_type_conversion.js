const age = "18";
console.log(age + 5);
console.log(Number(age) + 5); // явная конвертация типов
console.log(age - 3);
const userName = "Вася";
console.log(Number(userName) + 5);
console.log(typeof NaN); // NaN - Not a Number
console.log("-----------");
console.log(String(4) + 7);
console.log(Boolean(-1));
console.log(Boolean(1)); // любое число кроме 0 = true
console.log(Boolean(0));
console.log("-----------");
console.log(Boolean(""));
console.log(Boolean("a"));
console.log("-----------");
console.log(Boolean("" + 10));
console.log(true + 2);
console.log("-----------");
const a = 2 + "10";
console.log(a - 10 + " такие пироги");
// заключание: нужно часто использовать явную конфертацию
// чтобы избежать ошибок в вычислениях
// и для того, чтобы код был понятнее
