const bmwX3Price = 100000;
const budget = 20000;

let message;
if (budget > bmwX3Price) {
   message = "BMW";
} else {
   message = "Велосипед";
}

console.log(`${message}`);

// выражение 1
10 > 0 ? console.log("Больше 0") : console.log("Не больше");
// bool_выражение ? усл_if : усл_else;
// выражение 2
if (10 > 0) {
   message = "Больше 0";
} else {
   message = "Не больше";
}
// Эти выражения идентичны
console.log("-----------------------");

// также эта конструкция возвращает значение,
// значит можно делать так:
const str = 10 > 0 ? "Больше 0" : "Не больше";
console.log(str);
console.log("-----------------------");
// ещё можно делать вот так
// такое можно часто увидеть в React
console.log(`Я хочу купить ${budget > bmwX3Price ? "BMW" : "Велосипед"}`);
