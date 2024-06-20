/*
Вася положил 12 000$ на вклад 7% годовых с
капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$
через 2 года после снятия вклада. И остаток после покупки.
Итог = Сумма * (1 + Ставка в месяц не в %) ^ срок в месяцах
*/
const buyersName = "Вася";
const monthlyInterest = 0.07 / 12;
const initialAmount = 12000;
// формула афигеть каких сложных процентов
let finalAmount = initialAmount * (1 + monthlyInterest) ** 24;
let remains = finalAmount - 13500;
if (finalAmount >= 13500) {
   console.log(`${buyersName} сможет купить дом 
и у него ещё останется ${remains}$`);
}
