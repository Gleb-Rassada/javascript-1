const money = 6;

if (money > 50) {
   console.log("Может купить наш продукт");
} else if (money > 5) {
   console.log("Куплен демо продукт");
} else {
   console.log("Не достаточно средств");
}

console.log("итог");

console.log("-----------------------------------");

// операторы равенства
const secretNumber = "7";
if (secretNumber == 7) {
   // хорошее правило не использовать не строгое равно
   console.log("Угадал не строго");
}

if (secretNumber === 7) {
   // строгое равенство проверяет и тип и значение
   console.log("Угадал строго");
}

const q = prompt("Введите число"); // возвращает значение из браузера
if (Number(q) === 7) {
   // нужно приведение т.к. браузер возвращает строку
   console.log("Угадал");
}
