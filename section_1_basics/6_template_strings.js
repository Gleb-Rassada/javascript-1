const projectName = "Сайт магазина";
const price = 2000;
const author = "Василий пупкин";

const template = author + " заказал " + projectName + " по цене " + price + "$";
console.log(template);

// используем ${} чтобы встраивать значения переменных в выводимую строку
const template2 = `${author} заказал ${projectName} по цене ${price}$`;
console.log(template2);

const template3 = `Проект
Цена ${price} $`; // произошёл переход на другую строку без
console.log(template3); // использования \n
